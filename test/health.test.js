const request = require("supertest");
const app = require("../server");

describe("Health Check", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
  });
});

//added line

//broke thetesr