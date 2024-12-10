// index.test.js
import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("sum function tests", () => {
  it("should return sum of two positive numbers", () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5);
  });

  it("should return 0 when one of the parameters is negative", () => {
    const result = sum(2, -3);
    assert.strictEqual(result, 0);
  });

  it("should return 0 when both parameters are negative", () => {
    const result = sum(-2, -3);
    assert.strictEqual(result, 0);
  });

  it("should return 0 when one of the parameters is not a number", () => {
    const result = sum(2, "string");
    assert.strictEqual(result, 0);
  });

  it("should return 0 when both parameters are not numbers", () => {
    const result = sum("string", "string");
    assert.strictEqual(result, 0);
  });

  it("should return 0 when both parameters are 0", () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
  });
});
