// build your `/api/projects` router here
const express = require("express");
const { checkProjectBody } = require("../middleware");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", checkProjectBody, async (req, res, next) => {
  try {
    const newProject = await Projects.insert(req.body);
    res.status(201).json(newProject);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
