import supertest from 'supertest';

import app from '../index';
const Request = supertest(app);

import {
  allImg,
  ImgDir,
  existedThummbnail,
  removeFile
} from '../utils/opearations';
import { resizeImage } from '../utils/sharp';

describe('Image Processing Functionalities Test', async () => {
  it('should create image thumbnail from icelandwaterfall image and save it in thumbnail folder with icelandwaterfall_test_thumbnail', async () => {
    await resizeImage(
      'icelandwaterfall',
      'icelandwaterfall_test_thumbnail',
      400,
      400
    );
    expect(existedThummbnail('icelandwaterfall_test_thumbnail')).toBe(true);
  });

  it('If Thumbnail Exists will delete it and create the thumbnail -> will return true', async () => {
    const IMAGE_NAME = 'encenadaport_w800_h600';
    if (existedThummbnail(IMAGE_NAME))
      await removeFile(ImgDir(IMAGE_NAME, 'jpg', true));

    await Request.get('/images?filename=encenadaport&width=800&height=600');
    expect(existedThummbnail(IMAGE_NAME)).toBeTruthy();
  });
});

describe('File System Functionalities Test', () => {
  it('should read all images in images folder and return array of images names and has fjord img', async () => {
    const imagesArr = await allImg();
    expect(imagesArr).toContain('fjord.jpg');
  });

  it('should check if fadl.jpg in thumbnail folder and return false', () => {
    const isExist = existedThummbnail('fadl');
    expect(isExist).toBeFalsy();
  });
});
