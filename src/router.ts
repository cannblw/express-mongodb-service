import express from 'express';
import HttpStatus from 'http-status-codes';

import SearchRequest from './dto/searchRequest';
import TypedRequest from './types/typedRequest';
import dtoValidationMiddleware from './middlewares/dtoValidationMiddleware';
import serviceContainer from './services/serviceContainer';
import SearchResponse from './dto/searchResponse';
import ResponseCode from './enum/responseCode';
import responseMessage from './messages/responseMessage';

import { mapRecordsToDto } from './mappers/recordMapper';

const router = express.Router();

router.post(
  '/',
  dtoValidationMiddleware(SearchRequest),
  async (req: TypedRequest<SearchRequest>, res: express.Response) => {
    const { searchService } = serviceContainer;
    const { body } = req;

    try {
      const records = await searchService.searchItems(body.startDate, body.endDate, body.minCount, body.maxCount);

      const recordsDto = mapRecordsToDto(records);

      const response = new SearchResponse(ResponseCode.SUCCESS, responseMessage.SUCCESS, recordsDto);

      res.send(response);
    } catch {
      const response = new SearchResponse(ResponseCode.UNKNOWN_ERROR, responseMessage.UNKNOWN_ERROR);

      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(response);
    }
  }
);

export default router;
