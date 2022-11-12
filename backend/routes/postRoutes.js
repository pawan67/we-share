const express = require("express");
const {
  getAllPosts,
  createPost,
  deletePost,
} = require("../controllers/postControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router
  .route("/")
  .get(protect, getAllPosts)
  .post(protect, createPost)
  .delete(protect, deletePost);

module.exports = router;
