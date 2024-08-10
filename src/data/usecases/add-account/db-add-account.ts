import { type AccountModel, type AddAccount, type AddAccountModel, type Encrypter } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => {
      const fakeAccount: AccountModel = {
        id: 'fake_id',
        name: 'fake_name',
        email: 'fake_email',
        password: 'fake_password'
      }
      resolve(fakeAccount)
    })
  }
}
