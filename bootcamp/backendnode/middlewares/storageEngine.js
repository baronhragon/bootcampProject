const multer = require('multer');


// multer Storage creation

const fileStorageEngine = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null, './images'); //Path to store images
    },
    filename: ( req, file, cb ) => {
        cb(null,`${file.originalname}`); //Name of the file after being sent to server
    }
})

const upload = multer({ storage: fileStorageEngine });



module.exports = {
    upload,
}