const express = require('express');
const router = express.Router();

const userController = require('../controllers/usercontroller');
const procedureRoutes = require('./procedureroutes'); // Add this line
const hospitalRoutes = require('./hospitalroutes'); // Add this line
const hospitalController = require('../controllers/hospitalcontroller');
const departmentRoutes = require('./departmentroutes'); // Add this line


// API endpoint to add a new hospital with departments
router.use('/hospital', hospitalRoutes);
router.use('/procedure', procedureRoutes);
router.use('/department', departmentRoutes);

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;