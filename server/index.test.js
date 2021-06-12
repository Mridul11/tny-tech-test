const request = require("supertest");
const app = require("./index");
const axios = require("axios");

describe('GET Endpoints', () => {
  test('should get a response of 500 on failure and 200 on success', async () => {
    const res = await request(app).get('/articles');
    if(res.ok === true) expect(res.statusCode).toEqual(200);
    else
     expect(res.statusCode).toEqual(500);
  })
});
