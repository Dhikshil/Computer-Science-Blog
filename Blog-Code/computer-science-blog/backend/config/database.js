import mongoose from 'mongoose';

import { DB_URI } from './env.js';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;