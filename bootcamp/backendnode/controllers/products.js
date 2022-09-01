const { response, request } = require("express");
const { dbConnection } = require("../database/config");


// =================== ENDPOINTS GET ===================

const productGet = async (req, res) => {
  let Iquery = `select * from products`;
  let results = await dbConnection(Iquery);
  res.send(results);
}


// =================== ENDPOINTS POST ===================

const productPost = async (req, res) => {
  let {nameProduct,descriptionProduct,price,img,productType,idRestaurant} = req.body;
  let Iquery = `insert into products (nameProduct,descriptionProduct,price,imgP,productType,idRestaurant) values ('${nameProduct}', '${descriptionProduct}','${price}', '${img}', '${productType}','${idRestaurant}')`;
  let results = await dbConnection(Iquery);
  res.send(results);
};

module.exports = {
    productGet,
    productPost
};