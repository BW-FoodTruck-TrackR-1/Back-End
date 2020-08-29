exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("operators")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("operators").insert([
        { username: "operator1", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
        { username: "operator2", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
        { username: "operator3", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
      ]);
    });
};
