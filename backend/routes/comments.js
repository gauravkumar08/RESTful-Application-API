const express = require("express");
const auth = require("../middleware/auth");
const {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/", auth, createComment);
router.get("/", getComments);
router.get("/:id", getComment);
router.put("/:id", auth, updateComment);
router.delete("/:id", auth, deleteComment);

module.exports = router;
