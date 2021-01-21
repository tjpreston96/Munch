const Post = require("../models/post");

module.exports = {
  create,
  index,
  delete: deleteOne,
  // update
};

function create(req, res) {
  req.body.addedBy = req.user._id;
  Post.create(req.body)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
}

function index(req, res) {
  Post.find({})
    .populate("addedBy")
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      res.json(err);
    });
}

function deleteOne(req, res) {
  Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    });
}

// function deleteReply(req, res) {
//   Recipe.findById(req.params.messageId)
//     .then((message) => {
//       res.json(message);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }

// function index(req, res) {
//   Recipe.find({})
//     .then((recipes) => {
//       res.json(recipes);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }

// function show(req, res) {
//   Recipe.findById(req.params.id)
//     .then((recipe) => {
//       res.json(recipe);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }

// function reply(req, res) {
//   Recipe.findById(req.params.id)
//     .then((post) => {
//       post.replies.push(req.body);
//       post.save().then(() => res.json(post._id));
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }
