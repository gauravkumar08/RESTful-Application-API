require('dotenv').config();

const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../server');
const User = require('../models/User');
const { connect, clearDatabase, closeDatabase } = require('./setup');

const JWT_SECRET = process.env.JWT_SECRET || 'test_jwt_secret_key';

beforeAll(async () => {
  await connect();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});

describe('POST /api/posts', () => {
  test('returns 401 if no token provided', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'No token', content: 'Unauthorized' });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toMatch(/no token|access denied/i);
  });

  test('creates a post if valid token is provided', async () => {
    const testUser = await User.create({
      username: 'gaurav123',
      email: 'gaurav123@gmail.com',
      password: 'password123',
    });

    const token = jwt.sign(
      { id: testUser._id.toString(), email: testUser.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Authenticated Post',
        content: 'Content for authenticated user',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Authenticated Post');
    expect(res.body.author).toBe(String(testUser._id));
  });
});
