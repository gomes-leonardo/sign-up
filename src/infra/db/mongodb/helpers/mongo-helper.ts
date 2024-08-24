import { type Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    if (!uri) return
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...documentWithoutMongoId } = collection
    const mappedAccount = {
      ...documentWithoutMongoId,
      id: _id.toString()
    }
    return mappedAccount
  }
}
