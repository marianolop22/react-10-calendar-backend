/* 
    Rutas de usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller')
const { validarCampos } = require ('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')

router.post(
    '/new', 
    [
        check ('name', 'El nombre es obligatorio').not().isEmpty(),
        check ('email', 'El email es obligatorio').isEmail(),
        check ('password', 'El password es obligatorio').isLength({min:6}),
        validarCampos
    ] , //middlewares
    crearUsuario );

router.post(
    '/',
    [
        check ('email', 'El email es obligatorio').isEmail(),
        check ('password', 'El password es obligatorio').isLength({min:6}),
        validarCampos
    ],
    loginUsuario);

router.get(
    '/renew',
    validarJWT,
    revalidarToken);



module.exports = router;