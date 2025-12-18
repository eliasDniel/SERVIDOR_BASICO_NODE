const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const existeEmail = await User.findOne({ email });
    if (existeEmail) {
      return res
        .status(400)
        .json({ ok: false, msg: "El correo ya está registrado" });
    }

    const usuario = new User(req.body);

    // ENCRYPTAR CONTRASEÑA
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    const token = await generarJWT(usuario.id);

    res.json({ ok: true, usuario, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Hable con el administrador" });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res
        .status(404)
        .json({ ok: false, msg: "El correo no está registrado" });
    }
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ ok: false, msg: "La contraseña es incorrecta" });
    }
    const token = await generarJWT(usuario.id);
    res.json({ ok: true, usuario, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Hable con el administrador" });
  }
};

const renewToken = async (req, res = response) => {
  const uid = req.uid;
  const token = await generarJWT(uid);
  const usuario = await User.findById(uid);
  res.json({
    ok: true,
    usuario,
    token,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  renewToken,
};
