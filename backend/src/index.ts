import express from "express";
import { connectToWhatsApp, messagesSender } from "./WhatsApp";
import { generateOTP } from "./utils/utilitySecret";
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
    otpValidation,
    schema,
} from "./utils/model";

const app = express();
connectToWhatsApp();

//  Send Schema Model Create
app.get("/", (_, __) => {
    schema();
    __.send("succsedd");
});

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
        res.status(200).json(responseJson({ status: 200, message: "Ok" }));
    } else {
        res.status(401).json(
            responseJson({ status: 401, message: "Unauthorized" })
        );
    }
});

app.listen(4000, () => {
    console.log("Listened 4000");
});
