import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

const connect = async () => {
  const connection = mongoose.connection.readyState;

  if (connection === 1) {
    console.log("Already connected to the database");
  }
  if (connection === 2) {
    console.log("Connecting to the database...");
  }

  try {
    mongoose.connect(MONGODB_URI, {
      dbName: "F4E-assessment",
      bufferCommands: true,
    });
  } catch (error: any) {
    console.log(error);
    throw new Error("Error: ", error);
  }
};

export default connect;
