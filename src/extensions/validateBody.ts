import { validate } from 'class-validator';
import errorMessages from '../errorMessages';

// Body is of type object because the library class-validator needs it
const getValidationErrors = (body: object): Promise<string | null> => new Promise((resolve) => {
  if (!body) {
    resolve(errorMessages.EMPTY_BODY);
    return;
  }

  validate(body).then((errors) => {
    if (errors.length > 0) {
      const errorMessages = errors.map((e) => e.constraints).join(' ');
      resolve(errorMessages);
      return;
    }

    resolve(null);
  });
});

export default getValidationErrors;
