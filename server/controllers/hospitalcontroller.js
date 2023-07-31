const Hospital = require('../models/hospital');
const Department = require('../models/department');



exports.addHospital = async (req, res) => {
  try {
    const { name, address, contact, website, city, state, rating, description, departments } = req.body;

    // Add hospital
    const hospitalId = await Hospital.addHospital(name, address, contact, website, city, state, rating, description);

    // Add departments and link them with the hospital
    if (departments && departments.length > 0) {
      for (const departmentName of departments) {
        const departmentId = await Department.addDepartment(departmentName);
        await Hospital.linkHospitalDepartment(hospitalId, departmentId);
      }
    }

    res.json({ message: 'Hospital and Departments added successfully.' });
  } catch (err) {
    console.error('Error adding hospital:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.getAllHospitals();
    res.json(hospitals);
  } catch (err) {
    console.error('Error fetching hospitals:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getHospitalById = async (req, res) => {
  try {
    console.log("heyy")
    const hospitalId = req.params.id;
    const hospital = await Hospital.getHospitalById(hospitalId);
    
    if (!hospital) {
      return res.status(404).json({ error: 'Hospital not found' });
    }

    res.json(hospital);
  } catch (err) {
    console.error('Error fetching hospital:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getHospitalByFilter = async (req, res) => {
  try {
    const { department, city, minPrice, maxPrice, rating } = req.query;
    const parsedMinPrice = parseInt(minPrice);
    const parsedMaxPrice = parseInt(maxPrice);
    const parsedRating = parseFloat(rating);

    // Call the model function to fetch hospitals based on filters
    const hospitals = await Hospital.getHospitalByFilter(
      department,
      city,
      parsedMinPrice,
      parsedMaxPrice,
      parsedRating
    );

    // If no hospitals match the filters, send a message
    if (!hospitals || hospitals.length === 0) {
      return res.status(404).json({ message: 'No hospitals found with the specified filters.' });
    }

    // Send the filtered hospitals as JSON response
    res.json(hospitals);
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  exports.getProcedureByFilter = async (req, res) => {
    try {
      const { hospid,hospname,department, city, minPrice, maxPrice, rating } = req.query;
      const parsedMinPrice = parseInt(minPrice);
      const parsedMaxPrice = parseInt(maxPrice);
      const parsedRating = parseFloat(rating);
  
      // Call the model function to fetch hospitals based on filters
      const hospitals = await Hospital.getProcedureByFilter(
        hospid,
        hospname,
        department,
        city,
        parsedMinPrice,
        parsedMaxPrice,
        parsedRating
      );
  
      // If no hospitals match the filters, send a message
      if (!hospitals || hospitals.length === 0) {
        return res.status(404).json({ message: 'No hospitals found with the specified filters.' });
      }
  
      // Send the filtered hospitals as JSON response
      res.json(hospitals);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};



