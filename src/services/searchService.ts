import RecordResponse from "../dto/recordResponse";

interface SearchService {
  searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): RecordResponse[];
}

export default SearchService;