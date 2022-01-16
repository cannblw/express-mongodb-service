import RecordResponse from "../dto/recordResponse";

interface SearchService {
  searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): Promise<RecordResponse[]>;
}

export default SearchService;