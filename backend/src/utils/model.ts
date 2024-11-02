import postgres from "postgres";
import { generateUserId } from "./utilitySecret";
import { generateDate } from "./utilityResult";
import("dotenv/config");
const sql = postgres(process.env.DB_URL!);

async function schema() {
    await sql`CREATE TABLE users(
        "user_id"  varchar(250),
        "user_number" varchar(250),
        "user_createAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    )`;
    await sql`CREATE TABLE userdata (
        "user_id" varchar(250),
        "user_number" varchar(250),
        "user_createAt" TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
        "user_name" varchar(250),
        "user_lastOTP" varchar(250),
        "refresh_token" varchar(250)
    )`;
}

async function  jwtUser(number) {
    const data = await sql`SELECT "user_number","user_name","user_createAt" from userdata WHERE "user_number"=${number}`
    return data[0]
}


async function checkAvailabeNumber(number) {
    const data =
        await sql`SELECT * FROM userdata WHERE "user_number" = ${number} `;
    return data.length ? true : false;
}

async function otpValidation(number, otp) {
    const data =
        await sql`SELECT "user_lastOTP" FROM userdata WHERE "user_number" = ${number}`;

    const otpCode = String(data[0]?.user_lastOTP).split(".")[0];
    const dateCode = String(data[0]?.user_lastOTP).split(".")[1];
    if (otpCode == otp) {
        if (parseInt(dateCode) >= generateDate()) {
            await sql`UPDATE userdata SET "user_lastOTP"=${"0.0"} WHERE "user_number" = ${number}`;
            return true;
        }
    }
    return false;
}

async function generateUserLogin({ number, otp, timestamp }) {
    const exist = await checkAvailabeNumber(number);
    const OtpNumber = String(otp) + "." + String(timestamp);
    try {
        if (exist) {
            await sql`UPDATE userdata SET "user_lastOTP"=${OtpNumber} WHERE "user_number" = ${number}`;
        } else {
            await sql`INSERT INTO userdata ("user_id","user_number","user_lastOTP") values (
            ${generateUserId()},${number},${OtpNumber} )`;
        }
    } catch (error) {
        console.log(error);
    }
}


export { schema, checkAvailabeNumber, generateUserLogin, otpValidation , jwtUser };