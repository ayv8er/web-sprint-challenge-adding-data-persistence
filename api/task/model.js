// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("tasks");
};

module.exports = {
  getAll,
};
