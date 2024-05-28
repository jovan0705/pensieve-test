const { getAllDevice, getDeviceDetail } = require('../controllers/GpsController');
const ErrorHandler = require('../middlewares/errorHandler');

const router = require('express').Router();

router.get("/gps", getAllDevice);
router.get("/gps/:id", getDeviceDetail);

router.use(ErrorHandler)

module.exports = router