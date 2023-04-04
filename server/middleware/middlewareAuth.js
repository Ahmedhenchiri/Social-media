const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    UserModel.findById(user.id, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = { id: user.id };
      next();
    });
  });
};
module.exports={authenticateToken}
