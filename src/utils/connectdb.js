import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
};
