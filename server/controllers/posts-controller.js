/* eslint-disable no-unreachable */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
//const natural = require("natural");
const axios = require("axios").default;

const Post = require("../models/post");
const User = require("../models/user");
const UserInteraction = require("../models/userInteration");

const edenNLPKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGNmMzFjNTgtNGRlMC00MDc3LThhZDgtMmJlOWMwN2U4NGVhIiwidHlwZSI6ImFwaV90b2tlbiJ9.eHngTN0AVus2Qh8gUtRRq7T6UYyMdPWM403oVAeijKw";

const endpointUrl = "https://api.edenai.run/v2/text/topic_extraction";

const config = {
  headers: {
    Authorization: `Bearer ${edenNLPKey}`,
  },
};

const newTweet = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  try {
    const { content, userID } = req.body;
    let keywords;

    let mediaFile;
    let mediaType;

    if (req.file) {
      const { filename, mimetype } = req.file;
      mediaFile = filename; // Contains the uploaded file data
      mediaType = mimetype;
    } else {
      // Handle the case when media is not provided
      mediaFile = null;
      mediaType = null;
    }

    if (content !== "") {
      const postData = {
        providers: "openai",
        text: content,
        language: "en",
      };

      axios
        .post(endpointUrl, postData, config)
        .then(async (response) => {
          // Handle the API response here

          keywords = response.data.openai.items[0].category;
          passToNewTweet(keywords);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    }
    const passToNewTweet = async (keywords) => {
      const newPost = new Post({
        user: userID,
        content: content,
        mediaType: mediaType,
        media: mediaFile,
        keywords: {
          content: keywords,
        },
      });
      const savePost = await newPost.save();
      if (savePost) {
        res.status(201).json({ message: "Tweet created successfully" });
      }
    };
  } catch (err) {
    const error = new HttpError("Error Creating tweet", 500);
    return next(error);
  }
};

const listNewsFeed = async (req, res, next) => {
  const userID = req.params.uid;
  existingUser = await User.findOne({ _id: userID });
  try {
    let relatedPosts;
    const userLikedPosts = await Post.find({ likes: userID }).exec();

    const userCommentedPosts = await Post.find({
      "comments[0].postedBy": userID,
    }).exec();

    if (userLikedPosts.length == 0 && userCommentedPosts.length == 0) {
      // User has liked posts, so retrieve all posts
      relatedPosts = await Post.find({})
        .populate("comments.postedBy", "_id name")
        .populate("user", "_id name")
        .sort("-timestamp")
        .exec();
    } else {
      const keywordTexts = userLikedPosts.flatMap(
        (post) => post.keywords[0].content
      );

      const commentKeywordTexts = userCommentedPosts.flatMap(
        (post) => post.keywords[0].content
      );

      const userKeywords = [...new Set(keywordTexts, commentKeywordTexts)];

      relatedPosts = await Post.find({
        $or: [
          {
            "keywords.content": {
              $in: userKeywords,
            },
          },
          {
            "user.places": {
              $eq: existingUser.places,
            },
          },
        ],
      })
        .populate("comments.postedBy", "_id name")
        .populate("user", "_id name")
        .sort("-timestamp")
        .exec();
    }
    res.json({ posts: relatedPosts, user: existingUser });
  } catch (err) {
    const error = new HttpError("Error listing new posts " + err, 500);
    return next(error);
  }
};

const comment = async (req, res, next) => {
  const { content, userID, postID } = req.body;

  try {
    const post = await Post.findById(postID);

    if (!post) {
      const error = new HttpError("Post not found", 404);
      return next(error);
    }
    const newComment = {
      content: content,
      postedBy: userID,
    };
    post.comments.push(newComment);

    // Save the updated Post document
    const result = await post.save();
    res.json(result);
  } catch (err) {
    const error = new HttpError("Error making comments " + err, 400);
    return next(error);
  }
};

const listComments = async (req, res, next) => {
  const postID = req.params.pid;

  try {
    let posts = await Post.find({ _id: postID })
      .populate({
        path: "comments",
        populate: {
          path: "postedBy",
          model: "User",
        },
        options: { sort: { created: -1 } },
      })
      .exec();
    res.json(posts[0].comments);
    console.log(posts[0].comments);
  } catch (err) {
    const error = new HttpError("Error listing comments " + err, 400);
    return next(error);
  }
};

const likePost = async (req, res) => {
  const { postCreator, postID } = req.body;
  const userID = postCreator;
  try {
    await Post.findByIdAndUpdate(
      postID,
      { $push: { likes: userID } },
      { new: true }
    );

    const like = new UserInteraction({
      user: userID,
      tweet: postID,
      interactionType: "likes",
    });

    await like.save();
    res.json({ message: "Post liked successfully" });
  } catch (error) {
    console.error("Error liking post:", error);
    res
      .status(500)
      .json({ message: "An error occurred while liking the post" });
  }
};

// Unlike a post
const unlikePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    await Like.deleteOne({ user: req.user.id, post: postId });
    res.json({ message: "Post unliked successfully" });
  } catch (error) {
    console.error("Error unliking post:", error);
    res
      .status(500)
      .json({ message: "An error occurred while unliking the post" });
  }
};

// Get likes for a post
const getLikesForPost = async (req, res) => {
  const postID = req.params.pid;

  try {
    const likes = await Post.findById(postID).populate("likes", "_id name");
    res.json(likes);
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ message: "An error occurred while fetching likes" });
  }
};

const search = async (req, res) => {
  try {
    const query = req.query.query;
    const posts = await Post.find({
      content: { $regex: query, $options: "i" },
    })
      .populate("user", "_id name image")
      .sort({
        timestamp: -1,
      });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const suggestions = async (req, res) => {
  try {
    const query = req.query.query;
    // Implement auto-suggestions logic here
    // Example: You can search for keywords that match the query and return them as suggestions
    const suggestions = await Post.distinct("keywords.content", {
      "keywords.content": new RegExp(query, "i"),
    });
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.newTweet = newTweet;
exports.comment = comment;
exports.listNewsFeed = listNewsFeed;
exports.listComments = listComments;
exports.likePost = likePost;
exports.unlikePost = unlikePost;
exports.getLikesForPost = getLikesForPost;
exports.search = search;
exports.suggestions = suggestions;
