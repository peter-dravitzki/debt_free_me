export interface Debt {
  id: number
  name: string
  debt_owing: number
  minimum_payment: number
  interest_rate: number
  total_debt: number
}
export interface DebtData {
  name: string
  debt_owing: number
  minimum_payment: number
  interest_rate: number
  total_debt?: number
}
