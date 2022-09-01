const { response, request } = require("express");
const { dbConnection } = require("../database/config");


// =================== ENDPOINTS GET ===================

const restaurantGet = async (req, res) => {
  let Iquery = `select * from restaurant`;
  let results = await dbConnection(Iquery);
  res.send(results);
};
const restaurantGetCoords = async (req, res) => {
  let Iquery = `select idRestaurant,lat,lng,img,nameRestaurant from restaurants.dbo.restaurant`;
  let results = await dbConnection(Iquery);
  res.send(results);
};



// =================== ENDPOINTS POST ===================

const restaurantPost = async (req, res) => {
  let {nameRestaurant,shortDescription,address,phone,rType,openLocal,closeLocal,lat,lng,img,imgCover} = req.body;
  let Iquery = `insert into restaurant (nameRestaurant,shortDescription,address,phone,rType,openLocal,closeLocal,lat,lng,img,imgCover) values ('${nameRestaurant}', '${shortDescription}','${address}', '${phone}', '${rType}','${openLocal}','${closeLocal}','${lat}','${lng}','${img}','${imgCover}')`;
  let results = await dbConnection(Iquery);
  res.send(results);
};

const restaurantPostProducts = async (req, res) => {
  let {idRestaurant} = req.body;
  let Iquery = `select nameProduct, descriptionProduct, price, imgP, productType, quantity FROM restaurants.dbo.products WHERE idRestaurant='${idRestaurant}'`;
  let results = await dbConnection(Iquery);
  res.send(results);
};


module.exports = {
  restaurantGet,
  restaurantGetCoords,
  restaurantPost,
  restaurantPostProducts
};
