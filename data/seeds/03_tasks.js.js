exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "Get through bootcamp",
      task_notes: "requires a lot of time and money",
      project_id: 1,
    },
    {
      task_description:
        "Take any reasonable coding job that pays the bills and continue building skills",
      task_notes:
        "requires a lot more time (approx 1 to 3 years) and still a lot of money (Lambda debt)",
      project_id: 1,
    },
    {
      task_description:
        "Find a job in a crypto company that offers remote work",
      project_id: 1,
    },
  ]);
};
