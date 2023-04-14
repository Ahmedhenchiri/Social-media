const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const authenticateToken = (userModel) => async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Missing token' });
    }

    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);
    const user = await UserModel.findById(decodedToken.id);

    if (!user) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.user = { id: user.id };
    next();
  } catch (error) {
    console.error('Error authenticating token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { authenticateToken };
