// import { HttpError } from 'http-errors';

export const notFoundHandler = (err, req, res) => {
  res.status(404).json({
    message: 'Contact not found',
  });
};