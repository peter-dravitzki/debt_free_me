import { Debt } from '../../models/debt'
import { useDebts } from '../hooks/useDebts'
import { useAuth0 } from '@auth0/auth0-react'
import DebtData from './Debt'
import { useState } from 'react'
import { IfNotAuthenticated } from './Authenticated'

function App() {
  const [months, setMonths] = useState(0)
  const { data } = useDebts()
  const { logout, loginWithRedirect } = useAuth0()

  function iterateMonths() {
    //alert(months)
    if (data) {
      let totalToPay = data.reduce((acc, debt) => acc + debt.debt_owing, 0)

      if (totalToPay > 0) {
        setMonths(months + 1)
        for (let i = 0; i < data.length; i++) {
          const debt = data[i]
          console.log(debt.name, debt.debt_owing, debt.minimum_payment)

          const interestPayment = (debt.interest_rate / 100) * debt.debt_owing
          debt.debt_owing += interestPayment
          totalToPay += interestPayment
          if (debt.debt_owing > 0) debt.debt_owing -= debt.minimum_payment
          if (debt.debt_owing < 0) {
            data[(i + 1) % data.length].minimum_payment += debt.minimum_payment
            totalToPay += debt.debt_owing
            debt.debt_owing = 0
            debt.minimum_payment = 0
          }
        }
      }
    }
  }
  const user = {
    nickname: 'john.doe',
  }

  function handleSignIn() {
    loginWithRedirect()
  }
  function handleSignOut() {
    logout()
  }
  if (data)
    return (
      <>
        <div className="app">
          <h1 className="text-3xl font-bold underline">Debt Free Me</h1>
          <nav>
            {/* <IfAuthenticated> */}
            <div className="debt-info-container">
              <button onClick={handleSignOut}>Sign Out</button>
              <button onClick={iterateMonths}>Next Month</button>
              {user && <p>Signed in as: {user?.nickname}</p>}

              <p>{months}</p>
            </div>
            <div className="debt-card-container">
              {data &&
                data.map((debt: Debt) => (
                  <div key={debt.id}>
                    <DebtData {...debt} />
                  </div>
                ))}
            </div>
            {/* </IfAuthenticated> */}
            <IfNotAuthenticated>
              <button onClick={handleSignIn}>Sign In</button>
            </IfNotAuthenticated>
          </nav>
        </div>
      </>
    )
}

export default App
