import { isValidObjectId } from 'mongoose';
import { createHttpError } from 'http-errors';

export const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw HttpError(404, 'Not found');
  }

  next();
};
