const { response, request } = require("express");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const { dbConnection } = require("../database/config");


const login = async (req, res = response) => {

  const { email, password } = req.body;

  //db
  try {
    let Iquery = `select * from users where email = '${email}'`;
    let result = await dbConnection(Iquery);

    //Comparacion de password encryptada
    const match = await bcrypt.compare(password,result.recordset[0].password);

    if (!match == true) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });
    }else {
      return res.status(200).send(result);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Usuario / Password no son correctos - password",
    });
  }
};

module.exports = {
  login,
};
