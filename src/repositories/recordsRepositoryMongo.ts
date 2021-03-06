import MongoDbClient from '../database/mongoDbClient';
import RecordModel from '../models/recordModel';
import RecordsRepository from './recordsRepository';

class RecordsRepositoryMongo implements RecordsRepository {
  private readonly client: MongoDbClient;

  constructor(client: MongoDbClient) {
    this.client = client;
  }

  async searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): Promise<RecordModel[]> {
    const collection = await this.client.getCollection();

    const items = (await collection
      .aggregate([
        {
          $project: {
            key: 1,
            value: 1,
            createdAt: 1,
            totalCount: {
              $sum: '$counts',
            },
          },
        },
        {
          $match: {
            totalCount: {
              $gt: minCount,
              $lt: maxCount,
            },
            createdAt: {
              $gt: new Date(startDate),
              $lt: new Date(endDate),
            },
          },
        },
      ])
      .toArray()) as RecordModel[];

    return items;
  }
}

export default RecordsRepositoryMongo;
