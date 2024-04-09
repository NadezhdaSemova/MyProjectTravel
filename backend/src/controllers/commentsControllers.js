const router = require("express").Router();
const commentService = require('../services/commentService')

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const comments = await commentService.getAll(query);
    res.json(comments);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { email, comment, placeId, ownerId} = req.body;
    await commentService.create({
        email, 
        comment, 
        placeId,
        ownerId
    });

    res.status(201).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get("/:commentId", async (req, res) => {
  try {
    const { placeId } = req.params;
    const place = await commentService.getOne(placeId);
    res.json(place);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.delete("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    await commentService.delete(commentId);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports = router;
