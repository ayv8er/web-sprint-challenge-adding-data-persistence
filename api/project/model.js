// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("projects");
};

const insert = async (project) => {
  const [id] = await db("projects").insert(project);
  return db("projects").where("project_id", id).first();
};

module.exports = {
  getAll,
  insert,
};
