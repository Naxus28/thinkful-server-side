// uses gatekeeper middleware to authenticate user 
export default (app) => {
  app.get('/api/users/me', (req, res, next) => {
    const user = req.user;

    if (!user) {
      res
        .status(401)
        .json({
          message: 'Must supply valid user credentials'
        });
    }

    res.json(user);
  });
};