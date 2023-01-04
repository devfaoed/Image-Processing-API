import {
  Router,
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction
} from 'express';
import imagesRouter from './img';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index');
});
// Images Router
router.use('/', imagesRouter);
//404 Page not found
router.use((req: Request, res: Response) =>
  res.status(404).render('error_404')
);
// 500 Server Errors Handlers
router.use(
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

export default router;
