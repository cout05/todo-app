import express from "express";
import { User } from "../models/userModels.js";

const router = express.Router();

let name = "";

router.get("/user", (request, response) => {
  try {
    if (name != "") {
      const user = {
        userId: name,
      };
      response.json({ user });
    } else {
      response.status(401).json({ error: "Not authenticated" });
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to create a new User (Sign up)
router.post("/signup", async (request, response) => {
  try {
    const { username, password } = request.body;

    // Check if all required fields are present
    if (!username || !password) {
      return response.status(400).send({
        message: "Send all required fields: username, password",
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return response.status(400).send({
        message: "User already exists",
      });
    }

    // Create a new user
    const newUser = await User.create({ username, password });

    return response.status(201).send(newUser);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to check if the user exists and validate the password
router.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;

    if (!username || !password) {
      return response.status(400).send({
        message: "Username and password are required",
      });
    }

    // Check if the user exists in the database
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // Check if the password is correct
      if (existingUser.password === password) {
        name = username;
        return response.status(200).send({
          message: "Login successful",
        });
      } else {
        return response.status(200).send({
          message: "Incorrect password",
        });
      }
    } else {
      return response.status(200).send({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
