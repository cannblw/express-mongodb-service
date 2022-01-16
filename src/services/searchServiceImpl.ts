import RecordsRepository from "../repositories/recordsRepository";
import RecordModel from "../models/recordModel";
import SearchService from "./searchService";

class SearchServiceImpl implements SearchService {
  private readonly recordsRepository: RecordsRepository;

  constructor(recordsRepository: RecordsRepository) {
    this.recordsRepository = recordsRepository;
  }

  searchItems(
    startDate: string,
    endDate: string,
    minCount: number,
    maxCount: number): Promise<RecordModel[]> {
      return this.recordsRepository.searchItems(startDate, endDate, minCount, maxCount);
  }

}

export default SearchServiceImpl;
