import redirectsMap from '../config/redirects';

export default (req, res, next) => {
  // if a key in the redirectsMap obj matches the url path 
  // redirect to the new url
  if (Object.keys(redirectsMap).find(entry => entry === req.path)) {
      console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);

      //https://expressjs.com/en/api.html
      res.redirect(301, redirectsMap[req.path]);
  } else {
    next();
  }
}