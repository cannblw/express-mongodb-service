import RecordsRepository from "../repositories/recordsRepository";
import SearchService from "../services/searchService";

type ServiceContainer = {
  recordsRepository: RecordsRepository,
  searchService: SearchService
};

export default ServiceContainer;