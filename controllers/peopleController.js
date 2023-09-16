const express = require("express");
const router = express.Router();
const People = require("../models/People");

// index
router.get("/", async (req, res) => {
  try {
    res.json(await People.find());
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  console.log(req.body, req.params.id);
  try {
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

// create
router.post("/", async (req, res) => {
  console.log("req.body:", req.body);
  try {
    res.json(await People.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// show
router.get("/:id", async (req, res) => {
  try {
    res.json(await People.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
