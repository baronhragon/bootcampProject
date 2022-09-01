const { Router } = require("express");
const { check } = require("express-validator");
const { userGet, userPostRegister, userPutNotificacion, userNotification } = require("../controllers/user");
const { emailExistRegister} = require("../helpers/db-validators");
const {validar} = require('../middlewares/validator');

const router = Router();

// =================== ENDPOINTS GET ===================

router.get("/", userGet);


// =================== ENDPOINTS POST ===================

router.post("/Register",[
  check('email', "El correo no es valido").isEmail(),
  check('email').custom(emailExistRegister),
  validar
],
  userPostRegister
);

router.post('/notification',userNotification);

// =================== ENDPOINTS PUT ===================

router.put("/notification",userPutNotificacion);

module.exports = router;
