const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.mongo, {
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