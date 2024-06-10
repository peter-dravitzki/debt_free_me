import request from 'superagent'
import { Debt } from '../../models/debt'

const rootUrl = '/api/v1'

export async function getDebts(): Promise<Debt[]> {
  return request.get(rootUrl + '/debts').then((res) => {
    return res.body.debts
  })
}
