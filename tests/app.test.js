import assert from "node:assert/strict";
import test from "node:test";
import Operations from "../helpers/Operation.js";
test.describe("Test division", () => {
  const operation = new Operations();
  test.it("Should succeed", () => {
    const a = 15,
      b = 3;
    assert.strictEqual(operation.divide(a, b), 5);
  });
  test.it("Should throw exception", () => {
    const a = 3,
      b = 0;
    assert.throws(() => operation.divide(a, b));
  });
  test.it("Should be true", () => {
    const a = 3,
      b = 1;
    assert.ok(a > b);
  });
});
/* 
myTest.test("Test addition", () => {
  const operation = new Operations();
  const result = operation.add(3, 6);
  assert.strictEqual(result, 9);
});
myTest.test("Test multiplication", () => {
  const operation = new Operations();
  const result = operation.multiply(4, 3);
  assert.strictEqual(result, 12);
});
 */
