const mongoose = require('mongoose');
const User = require('./models/User'); 
require('dotenv').config();

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const user = new User({
      username: 'gaurav123',
      email: 'gaurav123@gmail.com',
      password: 'password123' 
    });

    await user.save();
    console.log('User created:', user);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
