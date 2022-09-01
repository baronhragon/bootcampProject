const { Router } = require("express");
const {upload} = require('../middlewares/storageEngine');
const { uploadFile } = require("../controllers/uploadFile");

const router = Router();

// =================== ENDPOINTS GET ===================

// =================== ENDPOINTS POST ===================

router.post("/",upload.single('usrimage'),uploadFile);


module.exports = router;