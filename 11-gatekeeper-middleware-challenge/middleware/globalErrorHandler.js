export default (app) => {
  app.use((err, req, res, next) => {
    console.log('error: ', err.stack);
    res
      .status(500)
      .json({
        error: err.stack
      });
  });
};