const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");

/*---------- Public Routes ----------*/
router.get("/", postCtrl.index);

/*---------- Protected Routes ----------*/
router.use(require("../config/auth"));
router.post("/", checkAuth, postCtrl.create);
router.delete("/:id", checkAuth, postCtrl.delete);
router.put("/:id", checkAuth, postCtrl.update);
// router.get("/:id", checkAuth, postCtrl.show);
// router.post("/:id", checkAuth, postCtrl.reply);
// router.delete("/:messageId/:replyId", checkAuth, postCtrl.deleteReply);

// ======== Is User LoggedIn ======== //
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
