const { response } = require ('express');
const Usuario = require('../models/Usuario.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response ) => {

    const { email, password } = req.body;
    
    try {

        let usuario = await Usuario.findOne( { email } );

        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario (req.body);

        //encriptar contraseña
        const salt = bcrypt.genSaltSync();

        usuario.password = bcrypt.hashSync( password, salt);

        await usuario.save();

        //jwt
        const token = await generarJWT ( usuario.id, usuario.name);
    
        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json ({
            ok:false,
            msg:'Por favor hable con el admin'
        });
    }
};

const loginUsuario = async (req, res = response) => {

    const {email, password} = req.body;

    try {

        const usuario = await Usuario.findOne( { email } );
        
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'el usuario no existe'
            });
        }

        //confirmar los passwords
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if ( !validPassword ) {
            return res.status(400).json ({
                ok:false,
                msg: 'contraseña incorrecta'
            })
        }

        //generar jwt
        //jwt
        const token = await generarJWT ( usuario.id, usuario.name);

        res.status(200).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name,
            token
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json ({
            ok:false,
            msg:'Por favor hable con el admin'
        });
    }

};

const revalidarToken = (req, res = response) => {
    res.json({
        ok:true,
        msg:'renew'
    })
};


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}

