
const {Router} = require('express');
const { contactsPost } = require('../controllers/contacts');

const router = Router();

// =================== ENDPOINTS GET ===================

// router.get('/',get);

// =================== ENDPOINTS POST ===================

router.post('/',contactsPost);

// =================== ENDPOINTS UPDATE ===================

// router.put('/',Update);



module.exports = router;