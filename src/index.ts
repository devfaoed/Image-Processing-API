import path from 'path';
import express from 'express';
import morgan from 'morgan';
import router from './routes';

// Instance of express App
const app = express();
// Set Views template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Morgan Logger Middleware
app.use(morgan('short'));
// Routes
app.use('/', router);

// Start the Server
app.listen(4000, (): void => {
  console.log(`Server started at http://localhost:4000`);
});

export default app;
