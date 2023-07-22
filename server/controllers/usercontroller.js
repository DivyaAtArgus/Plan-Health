const User = require('../models/user');
const bcrypt = require('bcrypt');


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const rounds = 10;
    const hashedPassword = await bcrypt.hash(password, rounds);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = await user.save();
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.name = name;
    user.email = email;
    user.password = password;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.remove();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email});
    if(!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful'});
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};