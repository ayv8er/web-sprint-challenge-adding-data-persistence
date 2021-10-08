// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  /* select t.*, p.project_name, p.project_description
from tasks as t
join projects as p
on t.project_id = p.project_id */

  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");
};

module.exports = {
  getAll,
};
