const generateToken = () => {
    genNum = () => Math.floor(Math.random(1) * 10)
    return `${genNum()} ${genNum()} ${genNum()} ${genNum()} ${genNum()} ${genNum()}`
}

module.exports = generateToken
