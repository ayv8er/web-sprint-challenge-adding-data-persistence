// build your `/api/tasks` router here
const express = require("express");
const { checkTaskBody } = require("../middleware");
const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getAll()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.post("/", checkTaskBody, async (req, res, next) => {
  try {
    const newTask = await Tasks.insert(req.body);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
