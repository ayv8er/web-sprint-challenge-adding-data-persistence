exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "Time",
    },
    {
      resource_name: "Money",
    },
  ]);
};
