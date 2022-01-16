import RecordsRepository from '../repositories/recordsRepository';
import MongoDbClient from '../database/mongoDbClient';
import RecordsRepositoryMongo from '../repositories/recordsRepositoryMongo';
import SearchServiceImpl from './searchServiceImpl';
import SearchService from './searchService';

/*
 * Simple configuration to have dependency injection.
 *
 * This won't automatically resolve the dependencies, but it's better than
 * hardcoding the implementations in the business logic
 */

class ServiceContainer {
  private _recordsRepository: RecordsRepository;
  private _searchService: SearchService;

  public init() {
    const mongoDbClient = new MongoDbClient();

    this._recordsRepository = new RecordsRepositoryMongo(mongoDbClient);
    this._searchService = new SearchServiceImpl(this._recordsRepository);
  }

  public get recordsRepository() {
    return this._recordsRepository;
  }

  public get searchService() {
    return this._searchService;
  }
}

const serviceContainer = new ServiceContainer();

export default serviceContainer;
