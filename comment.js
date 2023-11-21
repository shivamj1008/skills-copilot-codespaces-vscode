//Create web server
const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const auth = require("../middleware/auth");
const Post = require("../models/Post");

// @route   POST comment/create
// @desc    Create a comment
// @access  Private
router.post("/create", auth, async (req, res) => {
  try {
    const { postId, comment } = req.body;

    //Validation
    if (!postId || !comment) {
      return res.status(400).json({ msg: "Not all fields have been entered" });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ msg: "Post does not exist" });
    }

    const newComment = new Comment({
      comment,
      post,
      postedBy: req.user.id,
    });

    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET comment/:postId
// @desc    Get all comments for a post
// @access  Private
router.get("/:postId", auth, async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate(
      "postedBy",
      "-password"
    );
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   GET comment/:commentId
// @desc    Get a comment
// @access  Private
router.get("/:commentId", auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId).populate(
      "postedBy",
      "-password"
    );
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   PUT comment/:commentId
// @desc    Update a comment
// @access  Private
router.put("/:commentId", auth, async (req, res) => {
  try {
    const { comment } = req.body;

    //Validation
    if (!comment) {
      return res.status(400).json({ msg: "Not all fields havevar express = require('express');
var app = express();

