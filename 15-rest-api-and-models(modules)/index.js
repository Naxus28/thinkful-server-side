import express from 'express';
import appMiddleware from './server/middleware/appMiddleware';
import errorHandleMiddleware from './server/middleware/errorHandleMiddleware';
import shoppingListRoutes from './server/api/shopping-list/shoppingListRoutes';
import recipeRoutes from './server/api/recipes/recipeRoutes';

const PORT = process.env.PORT || 8080;
const app = express();

appMiddleware(app, express);

recipeRoutes(app);

shoppingListRoutes(app);

errorHandleMiddleware(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
