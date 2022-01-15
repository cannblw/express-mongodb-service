import ErrorCode from '../enum/errorCode';
import RecordResponse from './recordResponse';

class SearchResponse {
  code: ErrorCode;

  msg: string;

  records: RecordResponse[] | undefined;

  constructor(code: ErrorCode, msg: string, records?: RecordResponse[]) {
    this.code = code;
    this.msg = msg;
    this.records = records;
  }
}

export default SearchResponse;
