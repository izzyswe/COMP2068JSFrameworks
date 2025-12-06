var express = require('express');
var router = express.Router();
const PostingModel = require('../models/postings.models');
const upload = require('../config/multer.config');

// GET /home – show real feed from MongoDB
router.get('/', async function (req, res, next) {
  try {
    const postings = await PostingModel.find()
      .populate('account') // load account data for username + pfp
      .sort({ createdAt: -1 }) // newest first
      .lean();

    const twitterPostings = postings.map(post => ({
      id: post._id.toString(),
      twitterProfileImg:
        post.account && post.account.accountProfilePicture
          ? post.account.accountProfilePicture
          : '/images/default_pfp.svg',
      twitterUsername:
        post.account && post.account.accountUsername
          ? post.account.accountUsername
          : 'unknown',
      tweetMessage: post.tweetMessage,
      tweetPostImg: post.tweetPostImg
    }));

    return res.render('home', { twitterPostings, user: req.user });
  } catch (err) {
    console.error('Error loading /home:', err);
    return next(err);
  }
});


// POST /home/post – create a new tweet
router.post('/post', upload.single('tweetPostImg'), async function (req, res, next) {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.redirect('/home');
    }

    await PostingModel.create({
      account: req.user._id,  // logged-in user
      tweetMessage: message.trim(),
      tweetPostImg: req.file ? `/userUploads/${req.file.filename}` : undefined
    });

    return res.redirect('/home');
  } catch (err) {
    console.error('Error creating post:', err);
    return next(err);
  }
});

router.post("/like/:id", async (req, res) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }

    const userId = req.user._id;
    const post = await PostingModel.findById(req.params.id);

    if (!post) {
      return res.sendStatus(404);
    }

    // If already liked -> UNLIKE
    const alreadyLiked = post.tweetLikes.some(id => id.equals(userId));

    if (alreadyLiked) {
      post.tweetLikes.pull(userId);
    } else {
      post.tweetLikes.push(userId);
    }

    await post.save();

    return res.sendStatus(200); // no JSON, just status

  } catch (err) {
    console.error("LIKE TOGGLE ERROR:", err);
    return res.sendStatus(500);
  }
});


module.exports = router;
