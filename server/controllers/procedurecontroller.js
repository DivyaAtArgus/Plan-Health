// API endpoint to add a new procedure
const express = require('express');
const pool = require('../db/db');
const app = express()


exports.addProcedure = async (req, res) => {
  try {
    const { proc_id, name } = req.body;

    // Insert procedure data
    const insertProcedureQuery = `
      INSERT INTO "procedure" (proc_id, name)
      VALUES ($1, $2);
    `;

    const procedureValues = [proc_id, name];
    await pool.query(insertProcedureQuery, procedureValues);

    res.json({ message: 'Procedure added successfully.' });
  } catch (err) {
    console.error('Error adding data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
}
};
const Procedure = require('../models/procedure');

exports.getAllProcedures = async (req, res) => {
  try {
    const procedures = await Procedure.getAllProcedures();
    res.json(procedures);
  } catch (err) {
    console.error('Error fetching procedures:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getProcedureById = async (req, res) => {
  try {
    const procedureId = req.params.id;
    const procedure = await Procedure.getProcedureById(procedureId);
    
    if (!procedure) {
      return res.status(404).json({ error: 'Procedure not found' });
    }

    res.json(procedure);
  } catch (err) {
    console.error('Error fetching procedure:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

