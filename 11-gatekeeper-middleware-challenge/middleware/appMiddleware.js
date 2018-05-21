import morgan from 'morgan';

export default (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static('public'));
};