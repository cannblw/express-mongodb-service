import express from 'express';

interface TypedRequest<T> extends express.Request {
  body: T;
}

export default TypedRequest;
