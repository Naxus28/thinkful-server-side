const errorHandler = (err, req, res, next) => {
  console.log('error: ', err.name);
  
  res
    .status(500)
    .json({
      name: err.name,
      message: err.message
    });
};

export default app => app.use(errorHandler);
