import postgres from "postgres";
import { generateUserId } from "./utilitySecret";
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
        "user_lastOTP" int,
        "refresh_token" varchar(250)
    )`;
}

async function checkAvailabeNumber(number) {
    const data =
        await sql`SELECT * FROM userdata WHERE "user_number" = ${number} `;
    return data.length ? true : false;
}

async function otpValidation(number, otpNumber) {
    const data =
        await sql`SELECT "user_lastOTP" FROM userdata WHERE "user_number" = ${number}`;
    return data[0]!.user_lastOTP == otpNumber;
}

async function generateUserLogin(number, otp) {
    const exist = await checkAvailabeNumber(number);
    try {
        if (exist) {
            await sql`UPDATE userdata SET "user_lastOTP"=${otp} WHERE "user_number" = ${number}`;
        } else {
            await sql`INSERT INTO userdata ("user_id","user_number","user_lastOTP") values (
            ${generateUserId()},${number},${otp} )`;
        }
    } catch (error) {
        console.log(error);
    }
}

export { schema, checkAvailabeNumber, generateUserLogin, otpValidation };
