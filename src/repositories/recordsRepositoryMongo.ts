import RecordResponse from "../dto/recordResponse";
import RecordsRepository from "./recordsRepository";

class RecordsRepositoryMongo implements RecordsRepository {
  searchItems(startDate: string,
    endDate: string,
    minCount: number,
    maxCount: number): RecordResponse[] {

      // TODO: Implement
      return [];

  }

}

export default RecordsRepositoryMongo;
