import express from 'express';
import appMiddleware from './middleware/appMiddleware';
import errorHandleMiddleware from './middleware/errorHandleMiddleware';
import shoppingListRoutes from './routes/shoppingList/shoppingList';
import recipesRoutes from './routes/recipes/recipes';

const PORT = process.env.PORT || 8080;

const app = express();

appMiddleware(app, express);

shoppingListRoutes(app);

recipesRoutes(app);

errorHandleMiddleware(app);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
