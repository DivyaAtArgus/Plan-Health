const express=require('express');
const departmentController= require("../controllers/departmentcontroller");
const router= express.Router();

//to add departments
router.post('/add',departmentController.addDepartment);


// GET all departments
router.get('/', departmentController.getAllDepartments);

// GET a specific department by ID
router.get('/:id', departmentController.getDepartmentById);

module.exports=router;