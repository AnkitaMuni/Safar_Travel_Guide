import jwt from 'jsonwebtoken'

const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).json({
            success:false,
            message:"Not authorized"
        })
    }

    //if token exists then verify
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user)=>{
        if(err){
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }

        req.user = user
        next()
    })
}

export const verifyUser = (req, res, next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.users.role==='admin'){
            next()
        } else {
            return res.status(401).json({
                success:false,
                message:"Not authenticated"
            })
        }
    })
}

export const verifyAdmin = (req, res, next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.users.role==='admin'){
            next()
        } else {
            return res.status(401).json({
                success:false,
                message:"Not authorized"
            })
        }
    })
}