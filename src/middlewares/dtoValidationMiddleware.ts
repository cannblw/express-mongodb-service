import { RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize } from "class-sanitizer";
import HttpStatus from 'http-status-codes';

import SearchResponse from "../dto/searchResponse";
import ErrorCode from "../enum/responseCode";

// Adapted from https://www.linkedin.com/pulse/dto-json-payload-expressjs-validation-middleware-imran-younas
const dtoValidationMiddleware = (type: any, skipMissingProperties = false): RequestHandler => {
  return (req, res, next) => {
    const dtoObj = plainToInstance(type, req.body);
    
    validate(dtoObj, { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const dtoErrors = errors.map((error: ValidationError) =>
        (Object as any).values(error.constraints)).join(". ");
        
        res.status(HttpStatus.BAD_REQUEST).send(new SearchResponse(ErrorCode.INCORRECT_BODY_FORMAT, dtoErrors));
      } else {
        sanitize(dtoObj);
        req.body = dtoObj;
        next();
      }
    });
  };
}

export default dtoValidationMiddleware;