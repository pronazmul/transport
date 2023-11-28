/* eslint-disable no-undef */
const express = require("express");
const { check } = require("express-validator");
const postsController = require("../controllers/posts-controller");
const verifyAuth = require("../middleware/check-auth");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.post(
  "/new",
  verifyAuth.requireSignin,
  fileUpload.single("media"),
  [
    check("content")
      .trim()
      .isString()
      .withMessage("Content must be a string")
      .isLength({ max: 280 }),
  ],
  postsController.newTweet
);

router.get(
  "/posts/feed/:uid",
  verifyAuth.requireSignin,
  postsController.listNewsFeed
);
router.post(
  "/posts/:p:id/comment/new",
  verifyAuth.requireSignin,
  fileUpload.single("media"),
  [
    check("content")
      .trim()
      .isString()
      .withMessage("Content must be a string")
      .isLength({ max: 280 }),
  ],
  postsController.comment
);

router.get(
  "/posts/:pid/comment/list",
  verifyAuth.requireSignin,
  postsController.listComments
);

router.post("/posts/likes", verifyAuth.requireSignin, postsController.likePost);

// Unlike a post
router.delete(
  "/posts/likes/:pid",
  verifyAuth.requireSignin,
  postsController.unlikePost
);

// Get likes for a post
router.get(
  "/posts/likes/:pid",
  verifyAuth.requireSignin,
  postsController.getLikesForPost
);

router.get("/posts/search", verifyAuth.requireSignin, postsController.search);

router.get(
  "/posts/search/suggestions",
  verifyAuth.requireSignin,
  postsController.search
);

module.exports = router;
