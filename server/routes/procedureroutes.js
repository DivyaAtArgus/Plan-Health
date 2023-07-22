const procedureController = require('../controllers/procedurecontroller');
const express = require("express")
const router = express.Router();

// API endpoint to add a new procedure
router.post('/add', procedureController.addProcedure);


// GET all procedures
router.get('/', procedureController.getAllProcedures);

// GET a specific procedure by ID
router.get('/:id', procedureController.getProcedureById);


module.exports = router;
