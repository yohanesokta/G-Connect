function sendMessageOtp(otp) {
    return `*Yohanes Secret Key Apss*\n\ntoken otp kamu *${otp}* dan jangan bagikan ke siapapun dalam bentuk apapun, gunakan kode sebaik baiknya`;
}
function responseJson({ data = "", status, message = "" }) {
    return {
        status: {
            code: status,
            message,
            data,
        },
    };
}

function generateDate(up = 0) {
    const timestamp = Date.now();
    return Math.floor(timestamp / 1000) + up;
}

function ValidationVerif(){
    
}
export { sendMessageOtp, responseJson, generateDate };
