const router = require("express").Router();
const userService = require("../services/userService");

router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const result = await userService.register({ email, password, username });

    res.json(result);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login({ email, password });

    res.json(result);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get("/logout", (req, res) => {
  res.end();
});

router.get("/:userId", async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await userService.getUser(userId);
    res.json(user);
  }catch({message}){
    res.status(404).json({message});
  }
})

module.exports = router;
