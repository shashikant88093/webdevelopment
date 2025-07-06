const mongoose = require('mongoose')

// connect mongodb  env MONGODBURL



async function connectToMongoose(url) {
    // console.log("Connecting to MongoDB...",url);
  try {
    if (!url || typeof url !== 'string' || (!url.startsWith('mongodb://') && !url.startsWith('mongodb+srv://'))) {
      throw new Error('Invalid MongoDB connection string. Please provide a valid URI starting with "mongodb://" or "mongodb+srv://".');
    }
    // Make sure the URL is valid and points to a real MongoDB server
    // Example: const url = "mongodb+srv://localhost:27017/mydatabase";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose connected to MongoDB!");
  } catch (error) {
    console.error("Connection error:", error.message);
    // Optionally, exit the process if connection fails
    process.exit(1);
  }
}


module.exports = connectToMongoose