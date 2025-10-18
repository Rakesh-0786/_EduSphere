// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// mongoose.set("strictQuery", false);

// const connectionToDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGO_URI);
//     if (connection) {
//       console.log(`Connected to MongoDB: ${connection.host}`);
//     }
//   } catch (e) {
//     console.error("Error connecting to MongoDB:", e.message);
//     process.exit(1);
//   }
// };

// export default connectionToDB;




import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {console.log(`db connected: ${conn.connection.host}`);})
    .catch((err) => {console.log(`error in connected db: ${err.message}`);})
}

export default connectToDb;


// rakeshkum17253
// maNrbjZdNLtnnuel

// mongodb+srv://rakeshkum17253:maNrbjZdNLtnnuel@cluster0.wtnd5il.mongodb.net/