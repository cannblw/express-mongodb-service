import express from 'express';

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
    res.send(new SearchResponse(ErrorCode.INCORRECT_BODY_FORMAT, errors), );
  }
});

export default router;
