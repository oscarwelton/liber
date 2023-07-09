import express from "express";
import {
  getUser,
  getUserFollowers,
  addRemoveFollower,
} from "../controllers/usersController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//read

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFollowers);

//update

router.patch("/:id/:friendId", verifyToken, addRemoveFollower);

export default router;
