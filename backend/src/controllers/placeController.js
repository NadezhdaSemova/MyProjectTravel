const router = require("express").Router();
const placeServiceice = require("../services/placeService");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const places = await placeServiceice.getAll(query);
    res.json(places);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { place, description, imgUrl, likes, ownerId} = req.body;
    await placeServiceice.create({
      place,
      description,
      imgUrl,
      likes,
      ownerId
    });

    res.status(201).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});


router.get("/:placeId", async (req, res) => {
  try {
    const { placeId } = req.params;
    const place = await placeServiceice.getOne(placeId);
    res.json(place);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.put("/:placeId", async (req, res) => {
  try {
    const { placeId } = req.params;
    const { place, description, imgUrl, likes, ownerId } = req.body;
    const placeData = {
      place, 
      description, 
      imgUrl, 
      likes,
      ownerId
    };

    await placeServiceice.update(placeId, placeData);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.delete("/:placeId", async (req, res) => {
  try {
    const { placeId } = req.params;
    await placeServiceice.delete(placeId);

    res.status(200).end();
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports = router;
