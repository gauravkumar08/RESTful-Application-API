const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
  const comment = new Comment({
    ...req.body,
    author: req.user.id,
  });
  await comment.save();
  res.status(201).json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.query.post_id }).populate("author", "username");
  res.json(comments);
};

exports.getComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Not found" });
  res.json(comment);
};

exports.updateComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment || comment.author.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });
  Object.assign(comment, req.body);
  await comment.save();
  res.json(comment);
};

exports.deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment || comment.author.toString() !== req.user.id)
    return res.status(403).json({ message: "Not allowed" });
  await comment.remove();
  res.json({ message: "Comment deleted" });
};
