const jwt = require('jsonwebtoken');

const secretKey = 'b7e4a2cf8359a3e1f23c4bcf0e09a9bdf5a12caa507c7b1d98f4ed76d2a25ed3';

// Replace this with the real MongoDB ObjectId string of your user
const userId = '687a110fcc5139d821b3d841'; 

const token = jwt.sign({ id: userId }, secretKey, { expiresIn: '1h' });

console.log('Generated JWT token:', token);
