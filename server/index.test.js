const request = require("supertest");
const app = require("./index");


const mockDataCall = async () => {
    const fetchedData = await axios.get(process.env.NEWS_URL);
    const finalResponse = await fetchedData.data;
    return finalResponse ;
}

describe("Testing the reposnse code", (done) => {
  test("It should response the GET method", async (done) => {
    const response = await mockDataCall();
    expect(response.statusCode).toBe(200);
  },20000);
});
