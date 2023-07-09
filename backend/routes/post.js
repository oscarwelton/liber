import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePosts,
} from "../controllers/postsController.js";

const router = express.Router();
