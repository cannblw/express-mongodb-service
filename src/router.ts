import express from 'express';
import HttpStatus from 'http-status-codes';

import getValidationErrors from './extensions/validateBody';
import SearchRequest from './dto/searchRequest';
import TypedRequest from './types/typedRequest';
import SearchResponse from './dto/searchResponse';
import ErrorCode from './enum/errorCode';

const router = express.Router();

router.post('/', async (req: TypedRequest<SearchRequest>, res: express.Response) => {
  const { body } = req;

  const errors = await getValidationErrors(body);
  if (errors != null) {
    res.status(HttpStatus.BAD_REQUEST).send(new SearchResponse(ErrorCode.INCORRECT_BODY_FORMAT, errors));
  }
});

export default router;
