const Post = require("../models/post");

module.exports = {
  create,
  index,
  delete: deleteOne,
  update,
  // show,
  // reply,
  // deleteReply
};

function create(req, res) {
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

function update(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      res.json(err);
    })
}

// function show(req, res) {
//   Post.findById(req.params.id)
//     .then((Post) => {
//       res.json(Post);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }

// function reply(req, res) {
//   Post.findById(req.params.id)
//     .then((post) => {
//       post.replies.push(req.body);
//       post.save().then(() => res.json(post._id));
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }

// function deleteReply(req, res) {
//   Post.findById(req.params.messageId)
//     .then((message) => {
//       res.json(message);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// }