import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use("/task", taskRoutes);
app.use("/", userRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("app connected to the database");
    app.listen(PORT, () => {
      console.log(`App is Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export default app;
