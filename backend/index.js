import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 5555;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["https://todo-app-frontend-rose.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello There");
});

app.use("/task", taskRoutes);

mongoose
  .connect(
    "mongodb+srv://eco:UkcFrodElFrUJANJ@todo-app.eyewt3h.mongodb.net/?authSource=Todo-app&authMechanism=SCRAM-SHA-1"
  )
  .then(() => {
    console.log("app connected to the database");
    app.listen(PORT, () => {
      console.log(`App is Listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
