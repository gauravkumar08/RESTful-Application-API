const request = require("supertest");
const app = require("../server");

describe("POST /api/comments", () => {
  it("should return 401 if no token is provided", async () => {
    const res = await request(app).post("/api/comments").send({
      postId: "507f1f77bcf86cd799439011",
      content: "Test comment",
    });
    expect(res.statusCode).toEqual(401);
  });
});