const pool = require('../db/db');

class Procedure {
  async addProcedure(procedureId, name) {
    try {
      const insertProcedureQuery = `
        INSERT INTO procedure (proc_id, name)
        VALUES ($1, $2);
      `;

      await pool.query(insertProcedureQuery, [procedureId, name]);
    } catch (err) {
      console.error('Error adding procedure:', err);
      throw new Error('Failed to add procedure.');
    }
  }
  async getAllProcedures() {
    try {
      const query = 'SELECT * FROM procedure;';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getProcedureById(id) {
    try {
      const query = 'SELECT * FROM procedure WHERE proc_id = $1;';
      const { rows } = await pool.query(query, [id]);

      if (rows.length === 0) {
        return null; // Return null if procedure with the given ID is not found
      }

      return rows[0];
    } catch (error) {
      throw error;
    }
  }

};


module.exports = new Procedure();
