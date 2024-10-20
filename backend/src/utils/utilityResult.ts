function sendMessageOtp(otp) {
    return `*Yohanes Secret Key Apss*\n\ntoken otp kamu *${otp}* dan jangan bagikan ke siapapun dalam bentuk apapun, gunakan kode sebaik baiknya`;
}
function responseJson({ data = [], status, message = "" }) {
    return {
        status: {
            code: status,
            message,
            data,
        },
    };
}
export { sendMessageOtp, responseJson };
