import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

// register user

export const register = async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, picturePath, friends, locaiton, occupation
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName, lastName, email, password: passwordHash, picturePath, friends, locaiton, occupation
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch(error) {
    res.status(500).json({error: error.message})
  }
}

// log in user.

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({email: email});
    if (!user) return res.status(400).json({message: "user does not exist"});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message: "invalid password"});

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });

 } catch(error) {
    res.status(500).json({error: error.message})
  }
}
