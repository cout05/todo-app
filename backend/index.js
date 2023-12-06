import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.use(cors());

app.use("/task", taskRoutes);

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
