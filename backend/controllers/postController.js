const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = new Post({ ...req.body, author: req.user.id });
  await post.save();
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post || post.author.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });
  Object.assign(post, req.body);
  await post.save();
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post || post.author.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });
  await post.remove();
  res.json({ message: "Post deleted" });
};
