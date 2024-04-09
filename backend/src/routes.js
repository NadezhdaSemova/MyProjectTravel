const router = require("express").Router();

const userController = require("./controllers/userController");
const placeController = require("./controllers/placeController");
const contactController = require("./controllers/contactController");
const commentController = require("./controllers/commentsControllers");

router.use("/api/users", userController);
router.use("/api/places", placeController);
router.use("/api/contact", contactController);
router.use("/api/comments", commentController);

module.exports = router;
