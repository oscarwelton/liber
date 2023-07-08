import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/User.js"

// register user

export const register = async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, picturePath, friends, locaiton, occupation
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = newUser({
      firstName, lastName, email, password: passwordHash, picturePath, friends, locaiton, occupation
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch(error) {

  }
}
