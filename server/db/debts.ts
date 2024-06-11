import db from './connection.ts'
import { Debt, DebtData } from '../../models/debt.ts'

//Create
export async function addDebt(data: DebtData) {
  const [id] = await db('debt').insert(data)
  return id
}

//Read all
export async function getAllDebts() {
  const debt = await db('debts').select().orderBy('debt_owing', 'asc')
  return debt as Debt[]
}

//Read by id
export async function getDebtById(id: number) {
  const debt = await db('debts').select().first().where({ id })
  return debt as Debt
}

//Update

export async function updateDebt(id: number, data: DebtData) {
  const updatedDebt = await db('debts')
    .where({ id })
    .update({ ...data })
  return updatedDebt
}

//Delete
export async function deleteDebt(id: number) {
  return await db('debts').where({ id }).delete()
}
