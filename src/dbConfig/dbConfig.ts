// Import the mongoose library for MongoDB object modeling
import mongoose from "mongoose";

// Define an asynchronous function to connect to MongoDB
export async function connect() {
  try {
    // Attempt to connect to the MongoDB database using the URI from environment variables
    // The '!' after process.env.MONGO_URI tells TypeScript to assume this value is not undefined
    // This skips safety checks and can cause a runtime error if the variable is actually missing
    mongoose.connect(process.env.MONGO_URI!);


    // Access the default mongoose connection instance
    const connection = mongoose.connection;

    // Event listener for a successful connection
    connection.on("connected", () => {
      console.log("MongoDB Connected successfully.")
    })

    // Event listener for connection errors
    connection.on("error", (err) => {
      console.log("MongoDB connection error. please make sure MongoDB is running.", err)
    })
  } catch (error) {
    // Catch and log any error that occurs during the connection process
    console.log("Something went wrong!\n", error);
  }
}
