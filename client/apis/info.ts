import request from 'superagent'
import { InfoData } from '../../models/info'

const rootUrl = '/api/v1'

export async function getInfo(): Promise<InfoData> {
  return request.get(rootUrl + '/info').then((res) => {
    return res.body.info
  })
}
export async function getEditInfo(): Promise<InfoData> {
  return request.get(rootUrl + '/info').then((res) => {
    return res.body.info
  })
}
