const express = require("express");
const router = express.Router();
const boardCtrl = require("../controllers/board");

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.get("/", checkAuth, boardCtrl.index);
router.post("/", checkAuth, boardCtrl.create);
router.get("/:id", checkAuth, boardCtrl.show);
router.post("/:id", checkAuth, boardCtrl.reply);
router.delete("/:id", checkAuth, boardCtrl.delete);
router.delete("/:messageId/:replyId", checkAuth, boardCtrl.deleteReply);

// ======== Is User LoggedIn ======== //

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: "Not Authorized" });
}


module.exports = router;