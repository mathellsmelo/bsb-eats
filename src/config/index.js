module.exports = {
    port: process.env.PORT || 3333,
    schema: process.env.SCHEMA || "bsbeats",
    host: process.env.HOST || 'localhost',
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "password",
    secret: process.env.SECRET  || 'CodingIsCool'
}