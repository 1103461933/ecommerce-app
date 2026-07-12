const User = require('../models/User');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key';

exports.register = async (data) => {
  const user = new User(data);
  await user.save();
  return { id: user.id, name: user.name, email: user.email };
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');
  const isValid = await user.comparePassword(password);
  if (!isValid) throw new Error('Invalid password');
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
  return { token, user: { id: user.id, name: user.name, email: user.email } };
};

exports.getUserById = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) throw new Error('User not found');
  return user;
};