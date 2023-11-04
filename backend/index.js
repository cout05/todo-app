import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const mongoDburl = process.env.MONGO_URI;
const PORT = process.env.PORT || 5555;

const app = express();

app.use(
  cors({
    origin: ["https://todo-app-frontend-rose.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello There");
});

app.use("/task", taskRoutes);

mongoose
  .connect(mongoDburl)
  .then(() => {
    console.log("app connected to the database");
    app.listen(PORT, () => {
      console.log(`App is Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
