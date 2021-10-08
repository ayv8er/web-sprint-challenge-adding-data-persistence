const checkProjectBody = (req, res, next) => {
  const { project_name } = req.body;

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

const checkTaskBody = (req, res, next) => {
  const { task_description } = req.body;
  if (
    task_description === undefined ||
    typeof task_description !== "string" ||
    task_description.trim() === ""
  ) {
    next({
      status: 400,
      message: "task name must be included in text format",
    });
  } else {
    next();
  }
};

module.exports = {
  checkProjectBody,
  checkResourceBody,
  checkTaskBody,
};
