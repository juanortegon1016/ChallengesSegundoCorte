const express = requiere ('express')
const router = express.Router ();
const {check} = requiere('express-validator');
const {crearUsuario, loginUsuario, revalidarToken} = require ('../Controllers/auth');
const {validarCampos} = require ('../middlewares/validar-campos');
const {validarJWT} =requiere('../middlewares/valida-swt');

router.post('/', loginUsuario)

router.post(
    '/new',
    [
        check('name', 'El hombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password',) .isLength ({ min: 6}),
        validarCampos
    ],
    crearUsuario)

router.get('/renew', revalidarToken, validarJWT)

module.exports = router;