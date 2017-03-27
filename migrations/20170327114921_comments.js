exports.up = (knex) => {
  return knex.schema.createTable("comments", (table) => {
    // CREATING SERIAL PRIMARY KEY
    table.increments().primary();
    table.integer("user_id").notNullable().references("users.id").onDelete("CASCADE");
    table.integer("post_id").notNullable().references("posts.id").onDelete("CASCADE");
    table.text("text");
    table.timestamp("added_at").notNullable().defaultTo("now()");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("comments");
};
