const request = require("supertest");
const app = require("../app");

it("should respond with Hello World!", async () => {
  const response = await request(app).get("/hello").send();

  expect(response.text).toBe("Hello World!");
});

it("should respond with a status of 200", async () => {
  await request(app).get("/hello").send().expect(200);
});
