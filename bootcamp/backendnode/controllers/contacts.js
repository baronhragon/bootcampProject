const { response, request } = require("express");
const { dbConnection } = require("../database/config");


// =================== ENDPOINTS POST ===================

const contactsPost = async (req, res) => {
  let {phone} = req.body;
  let Iquery = `SELECT * from restaurants.dbo.users WHERE phone='${phone}'`
  let results = await dbConnection(Iquery);
  res.send(results);
};



module.exports = {
    contactsPost
  };