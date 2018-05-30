const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  console.log('error: ', err.name);
  console.log('status: ', status);
  
  res
    .status(status)
    .json({
      name: err.name,
      message: err.message
    });
};

export default app => app.use(errorHandler);
