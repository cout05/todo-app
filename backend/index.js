import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const PORT = 5555;

const app = express();
app.use(express.json());

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
