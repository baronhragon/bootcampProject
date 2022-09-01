const { response } = require("express");


// =================== ENDPOINTS GET ===================


// =================== ENDPOINTS POST ===================

 const uploadFile = (req,res=response) => {
    const file = req.file;
    console.log(file);
    res.json({
        msg: "exito",
    })
}



module.exports = {
  uploadFile,
};