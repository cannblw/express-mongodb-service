import MongoDbClient from "../database/mongoDbClient";
import RecordModel from "../models/recordModel";
import RecordsRepository from "./recordsRepository";

class RecordsRepositoryMongo implements RecordsRepository {
  private readonly client: MongoDbClient;

  constructor(client: MongoDbClient) {
    this.client = client;
  }

  async searchItems(startDate: string,
    endDate: string,
    minCount: number,
    maxCount: number): Promise<RecordModel[]> {


      const items = await this.client.collection.aggregate([
        {
          $project: {
            "key": 1,
            "total": {
              $sum: '$counts'
            }
          }
        }
        // TODO: Use domain model and map later
      ]).toArray() as RecordModel[];

      return items;
  }

}

export default RecordsRepositoryMongo;
