// uses gatekeeper middleware to authenticate user 
export default (app) => {
  app.get('/api/users/me', (req, res, next) => {
    // user is attached to the req object
    // on the 'gatekeeper' middleware; thus it is available on every
    // middleware and route created after the gatekeeper'
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