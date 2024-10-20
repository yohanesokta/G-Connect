function generateOTP(length) {
    let i;
    let result = "";
    for (i = 0; i < length; i++) {
        result += String(Math.floor(Math.random() * 10));
    }
    return result;
}

export { generateOTP };
