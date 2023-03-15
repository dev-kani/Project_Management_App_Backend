const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`Connected to MongoDB `.brightBlue.bold)
};

module.exports = connectDB