const { response, request } = require("express");
const { dbConnection } = require("../database/config");



// =================== ENDPOINTS GET ===================

const locationGet = async (req, res) => {
  // let Iquery = `select * from location`;
  let Iquery = `GetLastLocations`;
  let results = await dbConnection(Iquery);
  res.send(results);
}


// =================== ENDPOINTS POST ===================

const locationPost = async (req, res) => {
  let {idUser,lat,lng} = req.body;
  let Iquery = `insert into location (idUser,lat,lng,locationTime) values ('${idUser}', '${lat}','${lng}', GETDATE())`;
  let results = await dbConnection(Iquery);
  res.send(results);
};

// =================== ENDPOINTS UPDATE ===================
const locationUpdate = async (req,res) => {
let {phoneId,idUser} = req.body;
let Iquery = `update dbo.users set phoneId = '${phoneId}' WHERE idUser = ${idUser}`
let results = await dbConnection(Iquery);
res.send(results);
}




module.exports = {
    locationGet,
    locationPost,
    locationUpdate
};