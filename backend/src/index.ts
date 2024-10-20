import express from "express";
import { connectToWhatsApp, messagesSender } from "./WhatsApp";
import { generateOTP } from "./utils/utilitySecret";
import { responseJson, sendMessageOtp } from "./utils/utilityResult";

const app = express();
// connectToWhatsApp();

app.get("/", (_, __) => {
    __.send("succsedd");
});
app.post("/auth/message", (req, res) => {
    const num = req.header("number");
    messagesSender(num, sendMessageOtp(generateOTP(6)));
    res.status(200).json(responseJson({ status: 200, message: "adding user" }));
});

app.listen(3000, () => {
    console.log("Listened 3000");
});
