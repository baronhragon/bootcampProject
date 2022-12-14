const {Router} = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");
const { validar } = require("../middlewares/validator");


const router = Router();

router.post('/login',[
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validar
  ],
  login
  );

module.exports = router;