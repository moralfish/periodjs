import { DateTime } from "./index";

describe('DateTime Functional Tests', () => {
test("Can Create Instance", () => {
  let date = new DateTime(new Date());
  expect(date).toBeInstanceOf(DateTime);
});
});
