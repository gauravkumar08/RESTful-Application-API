const request = require("supertest");
const app = require("../server");

describe("POST /api/posts", () => {
  it("should return 401 if no token is provided", async () => {
    const res = await request(app).post("/api/posts").send({
      title: "Test Title",
      content: "Test content",
    });
    expect(res.statusCode).toEqual(401);
  });
});