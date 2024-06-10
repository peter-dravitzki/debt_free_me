import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { getFormSubmissionInfo } from 'react-router-dom/dist/dom'

interface Props {
  name: string
  debt_owing: number
  minimum_payment: number
  interest_rate: number
  total_debt: number
}

export default function Debt(props: Props) {
  const debt_owing = (props.debt_owing / props.total_debt) * 100
  const [info, setInfo] = useState(props)

  function handleMoreInfo() {
    return getInfo(info)
  }
  function handleDelete() {}
  function handleEdit() {
    const editedInfo = editInfo()
    setInfo(editedInfo)
  }
  return (
    <div className="debt-card">
      <label className="debt-name">{props.name}</label>
      <label className="debt-owing">{props.debt_owing}</label>
      <div className="progressbar-container">
        <ProgressBar
          bgcolor="red"
          completed={Number(debt_owing.toPrecision(4))}
        />
      </div>
      <div className="button-container">
        <button className="more-info-button" onClick={handleMoreInfo}>
          More Info
        </button>
        <div></div>
        <button className="edit-info-button" onClick={handleEdit}>
          Edit Info
        </button>
        <div></div>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}
