const request = require('supertest');
const app = require('../app');

describe('GET /api/flights', () => {
  it('should return 200 and an array of flights', async () => {
    const res = await request(app).get('/api/flights');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
}); 