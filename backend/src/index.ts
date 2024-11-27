import express from "express";
import { connectToWhatsApp, messagesSender } from "./WhatsApp";
import { generateOTP } from "./utils/utilitySecret";
import cookieParser from "cookie-parser"
import cors from "cors"
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
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
    }
))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
connectToWhatsApp();

//  Send Schema Model Create
app.get("/", (_, __) => {
    schema();
    __.send("succsedd");
});

// Auth Function

const JWTVerification = (req,res,next)=>{
    const cookie = req.cookies.token_refresh
    console.log(req.cookies )
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
    const number = req.body["number"]
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
    const headNumber = req.body["number"];
    const headOtp = req.body["otp"];
    console.log(headNumber,headOtp)
    const validation = await otpValidation(headNumber, headOtp);
    if (validation) {
        const payload = await jwtUser(headNumber);
        const token = jwt.sign(payload,jwtSecret,{expiresIn:"1h"})
        const refresh_token = jwt.sign(payload,jwtSecret,{expiresIn:"60d"})


        res.cookie("token_refresh",token,{httpOnly:true,sameSite:"none",secure:true,maxAge:Date.now() + 24 * 60 * 60 * 1000})
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
