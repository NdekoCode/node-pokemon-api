import assert from "node:assert/strict";
import myTest from "node:test";
import Operations from "../helpers/Operation.js";
myTest.test("Test operation", async (t) => {
  const operation = new Operations();
  const val1 = 4;
  const val2 = 2;
  await t.test("Test addition", (t) => {
    const result = operation.add(val1, val2);
    assert.strictEqual(result, 6);
  });
  await t.test("Division", (t) => {
    const result = operation.divide(val1, val2);
    assert.strictEqual(result, 2);
  });
  await t.test("multiply", (t) => {
    const result = operation.multiply(val1, val2);
    assert.strictEqual(result, 8);
  });
});
