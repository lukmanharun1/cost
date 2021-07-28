const express = require('express');
const router = express.Router();
const CostController = require('../controllers/CostController');
const ProvinsiController = require('../controllers/ProvinsiController');

router.get('/provinsi', ProvinsiController.getAllProvinsi);
// router.post('/cost');
module.exports = router;