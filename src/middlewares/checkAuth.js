const { verifyToken } = require("../utils/AuthJWT");


const isAuth = async (req,res,next) =>{
    try{
        //Si tiene una sesion activa se utiliza passport
        if( req.isAuthenticated() ) return next()

        //Si envia un token desde el header authorization
        let token = req.headers.authorization

        if (!token) {
            return res.status(403).json({message: 'debe proveer el token' });
        }
        const user = await verifyToken(token)
        req.user = user
        next()

    }catch(err){
        return res.status(403).json({message: 'Forbidden'})
    }

}

module.exports = isAuth

