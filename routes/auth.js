/*
PATH: api/login
*/

const { Router, response } = require("express");
const {
  crearUsuario,
  loginUsuario,
  renewToken,
} = require("../controllers/auth");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-token");

const router = Router();

// Rutas de Auth
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo no es válido").isEmail(),
    check("password", "El password debe de ser de 6 caracteres o más").isLength(
      { min: 6 }
    ),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El correo no es válido").isEmail(),
    check("password", "El password debe de ser de 6 caracteres o más").isLength(
      {
        min: 6,
      }
    ),
    validarCampos,
  ],
  loginUsuario
);

router.get("/renew", [validarJWT], renewToken);

module.exports = router;
