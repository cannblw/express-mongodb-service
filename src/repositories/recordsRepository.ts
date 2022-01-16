import RecordModel from "../models/recordModel";

interface RecordsRepository {
  searchItems(startDate: string, endDate: string, minCount: number, maxCount: number): Promise<RecordModel[]>;
}

export default RecordsRepository;