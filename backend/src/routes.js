const router = require("express").Router();

const userController = require("./controllers/userController");
const placeController = require("./controllers/placeController");
const contactController = require("./controllers/contactController")

router.use("/api/users", userController);
router.use("/api/places", placeController);
router.use("/api/contact", contactController);

module.exports = router;
