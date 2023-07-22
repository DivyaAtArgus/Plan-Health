const express = require('express');
const hospitalController = require('../controllers/hospitalcontroller');

const router = express.Router();

// API endpoint to add a new hospital with departments

router.post('/add', hospitalController.addHospital);

//api rndpoint to get all hospital details
router.get('/', hospitalController.getAllHospitals);

// GET a specific hospital by ID
router.get('/filter', hospitalController.getHospitalByFilter);
router.get('/:id', hospitalController.getHospitalById);

module.exports = router;
