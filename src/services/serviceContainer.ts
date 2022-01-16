import RecordsRepositoryMongo from "../repositories/recordsRepositoryMongo";
import ServiceContainer from "../types/serviceContainer";
import SearchServiceImpl from "./searchServiceImpl";

/*
 * Simple configuration to have dependency injection.
 *
 * This won't automatically resolve the dependencies, but it's better than
 * hardcoding the implementations in the business logic
 */

const recordsRepository = new RecordsRepositoryMongo()
const searchService = new SearchServiceImpl(recordsRepository);

const serviceContainer: ServiceContainer = {
  recordsRepository,
  searchService
}

export default serviceContainer;
