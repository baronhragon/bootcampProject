const { response, request } = require("express");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const { dbConnection } = require("../database/config");

// =================== ENDPOINTS GET ===================

const userGet = async (req, res) => {
  let Iquery = `select * from users`;
  let results = await dbConnection(Iquery);
  res.send(results);
};


// =================== ENDPOINTS POST ===================

const userPostRegister = async (req, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { nombre, address, phone, email, password, typeC } = req.body;

  //Encriptar el password
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(password, salt);

  //guardar  en BD
  let Iquery = `insert into users (nombre,address,phone,email,password,typeC) values ('${nombre}', '${address}', '${phone}', '${email}', '${pass}','${typeC}')`;
  await dbConnection(Iquery);
  res.json({
    msg: "Registrado",
  });
};

const userNotification = async (req, res) => {
  const {id} = req.body;
  let Iquery = `SELECT nombre,notification from users WHERE idUser = '${id}'`;
  let results = await dbConnection(Iquery);
  res.send(results);
};

// =================== ENDPOINTS PUT ===================

const userPutNotificacion = async (req, res) => {
  const { idUser,notification } = req.body;
  let Iquery = `UPDATE users set notification = '${notification}' WHERE idUser='${idUser}'`;
  let results = await dbConnection(Iquery);
  res.send(results);
};

module.exports = {
  userGet,
  userPostRegister,
  userPutNotificacion,
  userNotification
};
