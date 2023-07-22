const pool = require('../db/db');

class Department {
  async addDepartment(name) {
    try {
      const insertDepartmentQuery = `
        INSERT INTO department (name)
        VALUES ($1)
        RETURNING id;
      `;

      const departmentResult = await pool.query(insertDepartmentQuery, [name]);
      return departmentResult.rows[0].id;
    } catch (err) {
      console.error('Error adding department:', err);
      throw new Error('Failed to add department.');
    }
  }
  async getAllDepartments() {
    try {
      const query = 'SELECT * FROM department;';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getDepartmentById(id) {
    try {
      const query = 'SELECT * FROM department WHERE dept_id = $1;';
      const { rows } = await pool.query(query, [id]);

      if (rows.length === 0) {
        return null; // Return null if department with the given ID is not found
      }

      return rows[0];
    } catch (error) {
      throw error;
    }
  }

};



module.exports = new Department();
