const errorHandler = (err, req, res, next) => {
  console.log('error: ', err.toString());
  
  res
    .status(500)
    .json({
      error: err.toString()
    });
};

export default (app) => app.use(errorHandler);
