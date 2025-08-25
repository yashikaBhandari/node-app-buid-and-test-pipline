const request = require('supertest');
const app = require('../server');

describe('Health Check API', () => {
  it('GET /health → status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

