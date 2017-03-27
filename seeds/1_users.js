exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([{
          name: "Grace"
        },
        {
          name: "Matt"
        },
        {
          name: "Christian"
        },
        {
          name: "Heather"
        },
        {
          name: "Rhys"
        }
      ]);
    });
};
