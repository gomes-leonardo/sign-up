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
