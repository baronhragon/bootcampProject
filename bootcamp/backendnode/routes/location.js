
const {Router} = require('express');
const { locationGet, locationPost, locationUpdate } = require('../controllers/location');

const router = Router();

// =================== ENDPOINTS GET ===================

router.get('/',locationGet);

// =================== ENDPOINTS POST ===================

router.post('/',locationPost);

// =================== ENDPOINTS UPDATE ===================

router.put('/',locationUpdate);



module.exports = router;