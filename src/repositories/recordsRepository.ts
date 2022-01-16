import RecordResponse from "../dto/recordResponse";

interface RecordsRepository {
  searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): RecordResponse[];
}

export default RecordsRepository;