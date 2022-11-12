const Post = require("../models/postModal");
const asyncHandler = require("express-async-handler");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const { caption, image } = req.body;
  const post = await Post.create({
    user: req.user._id,
    caption,
    image,
    userAvatar: req.user.pic,
    userName: req.user.name,
  });
  res.json(post);
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  await post.remove();
});

module.exports = {
  getAllPosts,
  createPost,
  deletePost,
};
