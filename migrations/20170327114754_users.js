exports.up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    // CREATING SERIAL PRIMARY KEY
    table.increments().primary();
    table.text("name");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("users");
};
