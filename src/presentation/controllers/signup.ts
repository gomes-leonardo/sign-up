import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest, serverError, successRequest } from '../helpers/http-helper'
import { type Controller, type HttpRequest, type EmailValidator, type HttpResponse } from '../protocols'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body?.[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { email, password, passwordConfirmation } = httpRequest.body

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isValid = this.emailValidator.isValid(email as string)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      return successRequest('success')
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
