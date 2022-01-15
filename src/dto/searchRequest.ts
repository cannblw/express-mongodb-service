import { IsDate, IsNumber } from 'class-validator';

class SearchRequest {
  @IsDate()
    startDate: string;

  @IsDate()
    endDate: string;

  @IsNumber()
    minCount: number;

  @IsNumber()
    maxCount: number;
}

export default SearchRequest;
