const methods = require("./all");

describe("Test1", () => {
  test("add", () => {
    expect(methods.a(10, 95)).toBe(105);
  });
});

describe("Test2", () => {
  test("square ", () => {
    expect(methods.b(2, 10)).toBe(1024);
  });
  test("ajax", async () => {
    expect.assertions(1);
    const res = await methods.c();
    expect(res).toBe("delectus aut autem");
  });
});
