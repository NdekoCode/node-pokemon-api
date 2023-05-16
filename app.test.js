import assert from "node:assert/strict";
import myTest from "node:test";
import Operations from "./helpers/Operation.js";
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
