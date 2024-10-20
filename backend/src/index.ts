import express from "express";
import { connectToWhatsApp, messagesSender } from "./WhatsApp";
import { generateOTP } from "./utils/utilitySecret";
import { responseJson, sendMessageOtp } from "./utils/utilityResult";
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

app.get("/", (_, __) => {
    schema();
    __.send("succsedd");
});

app.post("/auth/login", (req, res) => {
    const num = req.header("number");
    const otp = generateOTP(6);
    generateUserLogin(num, otp);
    messagesSender(num, sendMessageOtp(otp));
    res.status(200).json(
        responseJson({ status: 200, message: "User Set To Login" })
    );
});
app.post("/auth/verif", async (req, res) => {
    const head = req.header("number");
    const validation = await otpValidation(
        String(head).split(":")[0],
        String(head).split(":")[1]
    );
    if (validation) {
        res.status(200).json(responseJson({ status: 200, message: "Ok" }));
    } else {
        res.status(401).json(
            responseJson({ status: 401, message: "Unathorazion" })
        );
    }
});

app.listen(3000, () => {
    console.log("Listened 3000");
});
