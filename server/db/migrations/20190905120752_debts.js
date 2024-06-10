/**
 * @param {import('knex').Knex} knex
 */
export async function up(knex) {
  return knex.schema.createTable('debts', (table) => {
    table.increments('id')
    table.string('name')
    table.float('debt_owing')
    table.float('minimum_payment')
    table.float('interest_rate')
    table.float('total_debt')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('debts')
}
