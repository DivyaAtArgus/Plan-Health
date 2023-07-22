const pool = require('../db/db');

class Hospital {
  async addHospital(name, address, contact, website, city, state, rating, description) {
    try {
      const insertHospitalQuery = `
        INSERT INTO hospital (name, address, contact, website, city, state, rating, description)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id;
      `;

      const hospitalValues = [name, address, contact, website, city, state, rating, description];
      const hospitalResult = await pool.query(insertHospitalQuery, hospitalValues);
      return hospitalResult.rows[0].id;
    } catch (err) {
      console.error('Error adding hospital:', err);
      throw new Error('Failed to add hospital.');
    }
  }

   async linkHospitalDepartment(hospitalId, departmentId) {
    try {
      const linkHospitalDepartmentQuery = `
        INSERT INTO hospital_department (hospital_id, department_id)
        VALUES ($1, $2);
      `;
      await pool.query(linkHospitalDepartmentQuery, [hospitalId, departmentId]);
    } catch (err) {
      console.error('Error linking hospital and department:', err);
      throw new Error('Failed to link hospital and department.');
    }
  }

  async getAllHospitals() {
    try {
      const query = 'SELECT * FROM hospital;';
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getHospitalById(id) {
    try {
      const query = 'SELECT * FROM hospital WHERE id = $1;';
      const { rows } = await pool.query(query, [id]);

      if (rows.length === 0) {
        return null; // Return null if hospital with the given ID is not found
      }

      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getHospitalByFilter(department, city, minPrice, maxPrice, rating) {
    try {
      const query = `
      select distinct
      h.name AS hospital_name,
      d.name AS department_name,
      h.city ,
      h.rating,
      pp.price,
      pro.name
    FROM
      hospital h
    JOIN
      hospital_department hd ON h.id = hd.hosp_id
    JOIN
      department d ON hd.dept_id = d.dept_id
    JOIN
      procedure_price pp ON h.id = pp.hosp_id
    join 
      procedure pro on pp.proc_id = pro.proc_id
          WHERE
            d.name = $1
            AND h.city = $2
            AND pp.price >= $3
            AND pp.price <= $4
            AND h.rating >= $5;
        `;
  
        const values = [department, city, minPrice, maxPrice, rating];
  
        const { rows } = await pool.query(query, values);
  
        if (rows.length === 0) {
          return null;
        }
  
        return rows;
      } catch (error) {
        throw error;
      }
    }
  };



module.exports = new Hospital();
