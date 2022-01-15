import express from 'express';
import SearchRequest from './dto/searchRequest';
import TypedRequest from './types/typedRequest';
import dtoValidationMiddleware from './middlewares/dtoValidationMiddleware';

const router = express.Router();

router.post('/', dtoValidationMiddleware(SearchRequest), async (req: TypedRequest<SearchRequest>, res: express.Response) => {
  const { body } = req;

  res.send({ok: "ok"});
});

export default router;
