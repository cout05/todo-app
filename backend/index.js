import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const PORT = 5555;
const MONGO_URI =
  "mongodb+srv://eco:UkcFrodElFrUJANJ@todo-app.eyewt3h.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(
  cors({
    origin: ["https://todo-app-frontend-sigma-swart.vercel.app/"],
    methods: ["POST", "GET", "PUT", "DELETE"],
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
