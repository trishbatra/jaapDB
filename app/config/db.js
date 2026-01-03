const mongoose = require("mongoose");

export async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connect) {
      console.log("DB CONNECTED SUCCESSFULLY");
    }
  } catch (error) {
    console.log("some error", error.message);
    process.exit(1);
  }
}

export default connectDB