exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      project_name:
        "Become a computer programmer for a crypto company like Kraken",
      project_description:
        "From zero knowledge of programming, get through bootcamp, amass enough experience, knowledge and reputation, so I can get into a crypto company and work remote",
    },
  ]);
};
