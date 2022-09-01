
const {Router} = require('express');
const { restaurantGet, restaurantPost, restaurantGetCoords, restaurantPostProducts } = require('../controllers/restaurants');

const router = Router();

// =================== ENDPOINTS GET ===================

router.get('/',restaurantGet);
router.get('/:restaurant-coords',restaurantGetCoords);

// =================== ENDPOINTS POST ===================

router.post('/',restaurantPost);
router.post('/:products',restaurantPostProducts)


module.exports = router;