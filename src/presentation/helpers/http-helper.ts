import { ServerError } from '../errors/server-error'
import { type HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
export const successRequest = (message: string): HttpResponse => ({
  statusCode: 200,
  body: message
})
export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
