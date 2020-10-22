/* 
    Rutas de usuarios / Events
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require ('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require ('../controllers/events.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
//middleware para todos
router.use(validarJWT);

router.get(
    '/',
    getEventos);


router.post(
    '/', 
    [
        check ('title', 'El title es obligatorio').not().isEmpty(),
        check ('start', 'El start es obligatorio').custom(isDate),
        check ('end', 'El end es obligatorio').custom(isDate),
        validarCampos,
    ] , //middlewares
    crearEvento );


router.put(
    '/:id', 
    [
        check ('title', 'El title es obligatorio').not().isEmpty(),
        check ('start', 'El start es obligatorio').custom(isDate),
        check ('end', 'El end es obligatorio').custom(isDate),
        validarCampos,
    ] , //middlewares
    actualizarEvento );

router.delete(
    '/:id', 
    [
        check ('id', 'El id es obligatorio').not().isEmpty(),
        validarCampos
    ] , //middlewares
    eliminarEvento );



module.exports = router;