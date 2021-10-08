const db = require("../data/dbConfig");

const checkProjectBody = (req, res, next) => {
  const { project_name, project_completed } = req.body;

  //   if (project_completed === 0) {
  //     project_completed = false;
  //   } else {
  //     project_completed = true;
  //   }

  if (
    project_name === undefined ||
    typeof project_name !== "string" ||
    project_name.trim() === ""
  ) {
    next({
      status: 400,
      message: "project name must be included in text format",
    });
  } else {
    next();
  }
};

const checkResourceBody = (req, res, next) => {
  const { resource_name } = req.body;
  if (
    resource_name === undefined ||
    typeof resource_name !== "string" ||
    resource_name.trim() === ""
  ) {
    next({
      status: 400,
      message: "resource name must be included in text format",
    });
  } else {
    next();
  }
};

module.exports = {
  checkProjectBody,
  checkResourceBody,
};
