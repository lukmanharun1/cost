const express = require('express');
const router = express.Router();
const CostController = require('../controllers/CostController');
const ProvinsiController = require('../controllers/ProvinsiController');
const KotaController = require('../controllers/KotaController');

// provinsi
router.get('/provinsi', ProvinsiController.getAllProvinsi);
router.get('/provinsi/:id', ProvinsiController.getProvinsiById);


// kota
router.get('/kota', KotaController.getAllKota);
router.get('/kota/:id', KotaController.getKotaById);
// router.post('/cost');
module.exports = router;