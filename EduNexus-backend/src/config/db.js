const mongoose = require('mongoose');

async function connectDB(uri) {
  try {
    await mongoose.connect(uri || process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}
module.exports = { connectDB };