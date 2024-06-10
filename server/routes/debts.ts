import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

import * as db from '../db/debts.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const debts = await db.getAllDebts()

    res.json({ debts: debts.map((debt) => debt) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const debt = await db.getDebtById(Number(req.params.id))
    res.json(debt)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }

  try {
    const { name, debt_owing, minimum_payment, interest_rate } = req.body
    const id = await db.addDebt({
      name,
      debt_owing,
      minimum_payment,
      interest_rate,
    })
    res
      .setHeader('Location', `${req.baseUrl}/${id}`)
      .sendStatus(StatusCodes.CREATED)
  } catch (err) {
    next(err)
  }
})

export default router
