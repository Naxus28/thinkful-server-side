import express from 'express';

// middleware
import appMiddleware from './middleware/appMiddleware';
import globalErrorHandler from './middleware/globalErrorHandler';
import gateKeeper from './middleware/authentication';

// routes
import userRoute from './routes/users';

const PORT = process.env.PORT || 8080;
const app = express();

appMiddleware(app, express);

gateKeeper(app);

userRoute(app);

globalErrorHandler(app);

app.listen(PORT, () => console.log(`Serving app on port ${PORT}`));