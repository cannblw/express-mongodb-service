import { Collection, Db, MongoClient } from 'mongodb';

class MongoDbClient {
  private client: MongoClient;
  private db: Db;
  private _collection: Collection<Document>;

  private isInitialized: Promise<boolean | void>;

  private readonly uri = process.env.MONGODB_URI;
  private readonly dbName = process.env.MONGODB_DATABASE;
  private readonly collectionName = process.env.MONGODB_COLLECTION;

  constructor() {
    if (!this.uri) {
      throw new Error('MongoDB URI could not be found. Please, set the environment variable MONGODB_URI');
    }

    if (!this.dbName) {
      throw new Error(
        'MongoDB database name could not be found. Please, set the environment variable MONGODB_DATABASE'
      );
    }

    if (!this.collectionName) {
      throw new Error(
        'MongoDB collection name could not be found. Please, set the environment variable MONGODB_COLLECTION'
      );
    }

    // Non-null assertion operator because we already checked if these values exist
    this.client = new MongoClient(this.uri!);

    this.isInitialized = this.client.connect().then(() => {
      this.db = this.client.db(this.dbName!);

      this._collection = this.db.collection(this.collectionName!);
    }); // Don't handle the exception because I want it to stop if it can't connect
  }

  // Can't use getter because this is async
  public async getCollection() {
    await this.isInitialized;

    return this._collection;
  }
}

export default MongoDbClient;
