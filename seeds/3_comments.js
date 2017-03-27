exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("comments").del()
    .then(() => {
      // Inserts seed entries
      return knex("comments").insert([{
          user_id: 1,
          post_id: 5,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2008-11-11 13:23:44"
        },
        {
          user_id: 3,
          post_id: 2,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2010-11-11 13:23:44"
        },
        {
          user_id: 2,
          post_id: 1,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2008-11-21 13:23:44"
        },
        {
          user_id: 3,
          post_id: 1,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2018-11-11 13:23:44"
        },
        {
          user_id: 2,
          post_id: 4,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2008-01-11 23:23:44"
        },
        {
          user_id: 5,
          post_id: 8,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2008-11-11 13:23:44"
        },
        {
          user_id: 4,
          post_id: 5,
          text: "An country demesne message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by.",
          added_at: "2008-11-11 13:23:44"
        }

      ]);
    });
};
