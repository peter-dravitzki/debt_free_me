import React from 'react'
import type { InfoData } from '../../models/info'

function Info(props: InfoData) {
  const name = props.name
  const debtLeft = props.debt_owing
  const debtBirth = props.debt_since
  const totalDebt = props.total_debt
  const contact = props.contact_number
  const nextPayment = props.minimum_payment

  return (
    <>
      <h1>{name}</h1>
      <p>{debtLeft}</p>
      <p>{debtBirth}</p>
      <p>{totalDebt}</p>
      <p>{contact}</p>
      <p>{nextPayment}</p>
    </>
  )
}
export default Info
