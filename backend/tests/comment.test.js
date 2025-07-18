const request = require('supertest');
const app = require('../server'); 
const { connect, clearDatabase, closeDatabase } = require('./setup');

beforeAll(async () => {
  await connect();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});

describe('POST /api/comments', () => {
  test('should return 401 if no token is provided', async () => {
    const res = await request(app)
      .post('/api/comments')
      .send({ postId: '123', content: 'Test comment' });

    expect(res.statusCode).toBe(401);
  });

});
