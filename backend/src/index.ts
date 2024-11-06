import express from "express";
import { connectToWhatsApp, messagesSender } from "./WhatsApp";
import { generateOTP } from "./utils/utilitySecret";
import cookieParser from "cookie-parser"
import {
    generateDate,
    responseJson,
    sendMessageOtp,
} from "./utils/utilityResult";
import jwt from "jsonwebtoken";
import "dotenv/config";
import {
    checkAvailabeNumber,
    generateUserLogin,
    jwtUser,
    otpValidation,
    schema,
} from "./utils/model";

const jwtSecret = process.env.JWT_TOKEN_SECRET!
const app = express();
app.use(cookieParser());
connectToWhatsApp();

//  Send Schema Model Create
app.get("/", (_, __) => {
    schema();
    __.send("succsedd");
});

// Auth Function

const JWTVerification = (req,res,next)=>{
    const cookie = req.cookies.token_refresh
    console.log({data: cookie})
    jwt.verify(cookie,jwtSecret,(error,decoded)=>{
        if (error) {
            res.status(401).json(responseJson({status:"401",message:"Unauthorized"}))
        }
        req.user = decoded
        next()
    })
}

// Auth Login Function
app.post("/auth/login", (req, res) => {
    const number = req.header("number");
    const otp = generateOTP(6);
    generateUserLogin({
        number,
        otp,
        timestamp: generateDate(60),
    });
    messagesSender(number, sendMessageOtp(otp));
    res.status(200).json(
        responseJson({ status: 200, message: "User Set To Login" })
    );
});

// Auth Verif Function
app.post("/auth/verif", async (req, res) => {
    const headNumber = req.header("number");
    const headOtp = req.header("otp");
    const validation = await otpValidation(headNumber, headOtp);
    if (validation) {
        const payload = await jwtUser(headNumber);
        const token = jwt.sign(payload,jwtSecret,{expiresIn:"1h"})
        const refresh_token = jwt.sign(payload,jwtSecret,{expiresIn:"60d"})


        res.cookie("token_refresh",token)
        res.status(200).json(responseJson({ status: 200, message: "Ok",data:{refresh_token} }));
    } else {
        res.status(401).json(
            responseJson({ status: 401, message: "Unauthorized" })
        );
    }
});


app.post('/user',JWTVerification,(req,res)=>{
    const data = req["user"]
    res.json({data})

})
app.post('/signout',JWTVerification,(req,res)=>{
    res.clearCookie("token_refresh")
    res.status(200).json(responseJson({status:200,message:"success sign-out"}))
})
app.listen(4000, () => {
    console.log("Listened 4000");
});
