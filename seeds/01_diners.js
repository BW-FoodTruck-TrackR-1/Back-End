exports.seed = function (knex) {
  return knex("diners")
    .del()
    .then(function () {
      return knex("diners").insert([
        { username: "diner1", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
        { username: "diner2", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
        { username: "diner3", password: "$2a$04$3YScrc/3N0aLj8fp8tiIuu20WFuj6jQ0wQiX9Y/wegssRWXP6.D36" },
      ]);
    });
};
