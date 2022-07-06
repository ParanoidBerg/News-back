const jwt = require("jsonwebtoken")
require('dotenv').config()
module.exports = async (req, res, next) =>{
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "Нет доступа (no authorization header)" })
    }
    const [type, token] = authorization.split(' ')
    if(type !== 'Bearer') {
        return res.status(401).json({ error: "Неверный тип токена" })
    }
    try {
        req.user = await jwt.verify(token, process.env.KEY)
        next()
    }catch(err){
        return res.status(401).json({ error: `Вы не вошли в аккаунт` })
    }
}