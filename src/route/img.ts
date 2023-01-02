import { Router, Request, Response } from 'express';
import { allImg, ImgDir, existedThummbnail } from '../utils/opearations';
import { resizeImage } from '../utils/sharp';
import { generateFileName, trimExtension } from '../utils/helper';

const Imgroutes = Router();

interface QueryObj {
  filename?: string;
  width?: number;
  height?: number;
}

Imgroutes.get('/images', async (req: Request, res: Response) => {
  const images = await allImg();
  const { filename = '' }: QueryObj = req.query;
  const { width = NaN, height = NaN }: QueryObj = req.query;

  if (filename && !images.includes(filename + '.jpg')) {
    return res.status(404).render('error_404');
  }

  if (images.includes(filename + '.jpg') && (width || height)) {
    if ((width && !(+width > 0)) || (height && !(+height > 0)))
      return res
        .status(422)
        .send(
          '<strong style="font-family: sans-serif; text-align: center">Invalid Params, width & height must be positive number</strong>'
        );

    const thumbnailName = generateFileName(filename, width, height);
    if (!existedThummbnail(thumbnailName)) {
      await resizeImage(filename, thumbnailName, width, height);
      return res.status(201).sendFile(ImgDir(thumbnailName, 'jpg', true));
    }
    return res.sendFile(ImgDir(thumbnailName, 'jpg', true));
  }

  if (images.includes(filename + '.jpg')) {
    return res.sendFile(ImgDir(filename));
  }
  res.render('images', { images, trimExtension });
});

export default Imgroutes;
