import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { useInfo } from '../hooks/useInfo'
//import { useEditInfo } from '../hooks/useEditInfo'
import Info from './Info'
import { InfoData } from '../../models/info'

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
  const newInfo = useInfo().data as InfoData
  //const editedInfo = useEditInfo()

  function handleMoreInfo() {
    setInfo(info)
    if (newInfo) return <Info {...newInfo}></Info>
  }
  function handleDelete() {}
  function handleEdit() {}
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
