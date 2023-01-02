import {
  Router,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction
} from 'express';
import imagesRouter from './api/images';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.render('index');
});
// Images Router
routes.use('/api', imagesRouter);
//404 Page not found
routes.use((req: Request, res: Response) => res.status(404).render('404'));
// 500 Server Errors Handlers
routes.use(
  (
    error: ErrorRequestHandler,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
  ) => {
    console.log(error);
    res.status(500).render('500');
  }
);

export default routes;
