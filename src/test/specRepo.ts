import supertest from 'supertest';
import app from '../index';
const Request = supertest(app);

describe('Test Endpoint Response', () => {
  it('should index page wehn access "/" ', async () => {
    const response = await Request.get('/');
    expect(response.statusCode).toEqual(200);
  });

  it('should return error 404 when trying to access route which does ot exist', async () => {
    const response = await Request.get('/fadl');
    expect(response.statusCode).toBe(404);
  });

  it('should resize the fjord image and create a new image', async () => {
    const response = await Request.get('/images?filename=fjord&width=800');
    expect(response.statusCode).toBe(201);
  });

  it('should get the fjord image from cache', async () => {
    const response = await Request.get('/images?filename=fjord&width=800');
    expect(response.statusCode).toBe(200);
  });

  it('should return eror 404 when images not found', async () => {
    const response = await Request.get('/images?filename=myphoto');
    expect(response.statusCode).toBe(404);
  });
});
