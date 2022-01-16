import RecordModel from '../models/recordModel';

interface SearchService {
  searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): Promise<RecordModel[]>;
}

export default SearchService;
