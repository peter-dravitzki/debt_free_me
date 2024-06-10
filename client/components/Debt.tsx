import ProgressBar from './ProgressBar'

interface Props {
  name: string
  debt_owing: number
  minimum_payment: number
  interest_rate: number
  total_debt: number
}

export default function Debt(props: Props) {
  const debt_owing = (props.debt_owing / props.total_debt) * 100

  return (
    <div className="debt-card">
      <label className="header">{props.name}</label>

      <ProgressBar
        bgcolor="red"
        completed={Number(debt_owing.toPrecision(4))}
      />
    </div>
  )
}
