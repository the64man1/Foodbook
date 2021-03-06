//dotenv required for .env file
require("dotenv").config();

const jwt = require('jsonwebtoken');

const secret = process.env.secret;
const expiration = process.env.expiration;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Token invalid');
    }

    return req;
  },
  signToken: function ({ username, firstName, email, _id }) {
    const payload = { username, firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};