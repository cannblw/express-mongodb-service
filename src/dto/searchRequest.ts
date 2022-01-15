import { IsISO8601, IsNotEmpty, IsNumber } from 'class-validator';

class SearchRequest {
  @IsISO8601()
  @IsNotEmpty()
    startDate: string;

  @IsISO8601()
  @IsNotEmpty()
    endDate: string;

  @IsNumber()
  @IsNotEmpty()
    minCount: number;

  @IsNumber()
  @IsNotEmpty()
    maxCount: number;
}

export default SearchRequest;
