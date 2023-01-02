import {
  Router,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction
} from 'express';
import Imgroutes from './img';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.render('index');
});
// Images Router
routes.use('/', Imgroutes);
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
    res.status(500).render('error_500');
  }
);

export default routes;
