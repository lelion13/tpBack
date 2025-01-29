import jwt from "jsonwebtoken"
import { SECRET } from "../config.js"

export const verifyTokenMiddleware = (req, res, next) => {
try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Token is required' })
    }
    const token = authHeader.split(' ')[1]
    //const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const decoded = jwt.verify(token, SECRET)
    console.log(decoded)
    req.user = decoded
    next()


} catch (error) {
   return res.status(401).json({ message: 'Token is invalid', error })
}
}