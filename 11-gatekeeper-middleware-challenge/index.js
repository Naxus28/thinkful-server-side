import express from 'express';

// middleware
import appMiddleware from './middleware/appMiddleware';
import globalErrorHandler from './middleware/globalErrorHandler';
import gateKeeper from './middleware/authentication';

// api routes
import userRoute from './routes/users';

const PORT = process.env.PORT || 8080;
const app = express();

appMiddleware(app, express);

// authentication happens here
gateKeeper(app);

// if authenticated, send the user, else send error message and 401
userRoute(app);

globalErrorHandler(app);

app.listen(PORT, () => console.log(`Serving app on port ${PORT}`));