const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post("/", checkAuth, postCtrl.create);
router.get("/", checkAuth, postCtrl.index);
router.delete("/:id", checkAuth, postCtrl.delete);
// router.get("/:id", checkAuth, postCtrl.show);
// router.post("/:id", checkAuth, postCtrl.reply);
// router.delete("/:messageId/:replyId", checkAuth, postCtrl.deleteReply);

// ======== Is User LoggedIn ======== //

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
