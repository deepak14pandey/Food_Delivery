import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://deepakPandey:9827678994@cluster0.hsaie49.mongodb.net/food-del')
  .then(() => {
    console.log("DB Connected");
  });
};
