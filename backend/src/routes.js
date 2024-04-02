const router = require("express").Router();

const userController = require("./controllers/userController");
const placeController = require("./controllers/placeController");

router.use("/api/users", userController);
router.use("/api/places", placeController);

module.exports = router;
