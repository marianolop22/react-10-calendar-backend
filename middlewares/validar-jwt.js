const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res=response, next) => {

    //xtoken en headers
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json ({
            ok:false,
            msh:'no hay token en la peticion'
        });
    }

    try {

        const {uid, name} = jwt.verify(token, process.env.SEED);

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json ({
            ok:false,
            msh:'token invalido'
        });
    }

    next();
}


module.exports = {
    validarJWT
}