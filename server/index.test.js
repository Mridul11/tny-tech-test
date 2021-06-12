const request = require("supertest");
const app = require("./index");
const axios = require("axios");

describe('GET Endpoints', () => {
  it('should get a response of 500 on failure', async () => {
    const res = await request(app).get('/articles')
    expect(res.statusCode).toEqual(500)
  })
})

