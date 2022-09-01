
const {Router} = require('express');
const { productGet, productPost } = require('../controllers/products');

const router = Router();

// =================== ENDPOINTS GET ===================

router.get('/',productGet);

// =================== ENDPOINTS POST ===================

router.post('/',productPost);


module.exports = router;