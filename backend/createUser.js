const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path if needed
require('dotenv').config();

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    const user = new User({
      username: 'gaurav123',
      email: 'gaurav123@gmail.com',
      password: 'password123' // If your model hashes passwords, plain text is fine here
    });

    await user.save();
    console.log('User created:', user);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
