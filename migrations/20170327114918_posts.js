exports.up = (knex) => {
  return knex.schema.createTable("posts", (table) => {
    // CREATING SERIAL PRIMARY KEY
    table.increments().primary();
    table.integer("user_id").notNullable().references("users.id").onDelete("CASCADE");
    table.text("title");
    table.text("text");
    table.timestamp("added_at").notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("posts");
};
