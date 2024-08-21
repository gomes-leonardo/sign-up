import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    if (!uri) return
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  }
}
