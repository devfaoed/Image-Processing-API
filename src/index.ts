import express, { Application } from 'express';
const app: Application = express();

import path from 'path';
import morgan from 'morgan';

// routes importation
import routes from './route';

// setting up middleware
app.use(morgan('short'));
app.use('/', routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(4000, () => {
  console.log(`Server started at http://localhost:4000`);
});

export default app;
