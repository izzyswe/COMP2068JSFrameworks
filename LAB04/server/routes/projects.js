const express = require('express');
const router = express.Router();
const Project = require("../models/project")

//TODO: Configure HTTP handlers for CRUD functionalities
// GET /api/projects -> retrieves all projects
router.get("/", async (req, res, next) => {
  let projects = await Project.find();
  //HTTPS Response witj Status code 200 OK containing the projects in JSON
  res.status(200).json(projects);
})

module.exports = router;
