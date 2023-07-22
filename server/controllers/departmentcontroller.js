const express = require('express');
const pool = require('../db/db');
const Department = require('../models/department');
const app = express()


exports.addDepartment = async (req, res) => {
  try {
    const { dept_id, name } = req.body;

    // Insert depratment data
    const insertdepartmentQuery = `
      INSERT INTO "department" (name)
      VALUES ($1);
    `;

    const departmentValues = [   name];
    await pool.query(insertdepartmentQuery, departmentValues);

    res.json({ message: 'Department added successfully.' });
  } catch (err) {
    console.error('Error adding data:', err);
    res.status(500).json({ error: 'Internal Serv  er Error' });
}
};

exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.getAllDepartments();
    res.json(departments);
  } catch (err) {
    console.error('Error fetching departments:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getDepartmentById = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const department = await Department.getDepartmentById(departmentId);
    
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }

    res.json(department);
  } catch (err) {
    console.error('Error fetching department:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




