function generateOTP(length) {
    let i;
    let result = "";
    for (i = 0; i < length; i++) {
        result += String(Math.floor(Math.random() * 10));
    }
    return result;
}
function generateUserId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000);
    return `user_${timestamp}_${randomNum}`;
}

export { generateOTP, generateUserId };
