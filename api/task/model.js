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

const insert = async (task) => {
  const [id] = await db("tasks").insert(task);
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .where("task_id", id)
    .select("t.*")
    .first();
};

module.exports = {
  getAll,
  insert,
};
