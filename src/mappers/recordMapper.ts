import RecordResponse from '../dto/recordResponse';
import RecordModel from '../models/recordModel';

export const mapRecordToDto = (model: RecordModel): RecordResponse => {
  return {
    key: model.key,
    createdAt: model.createdAt,
    totalCount: model.totalCount,
  } as RecordResponse;
};

export const mapRecordsToDto = (model: RecordModel[]): RecordResponse[] => {
  return model.map((m) => mapRecordToDto(m));
};
