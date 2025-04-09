
import jwt from 'jsonwebtoken'

export const authenticate = async(req,res,next)=>{
    const token = req.headers.authorization
    // console.log("Atuh header" , token)
    if(!token || !token.startsWith('Bearer')){
        return res.status(401).json({
            message : "Unauthorized access"
        })
    }
    const jwtToken = token.split(" ")[1]
    try {
        const decoded = jwt.verify(jwtToken , process.env.JWT_SECRET)
        req.user = {id : decoded.id}
        next()
    } catch (error) {
        res.status(401).json({
            message : "Invalid Token"
        })
    }
}
