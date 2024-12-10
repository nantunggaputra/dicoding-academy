import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("Sum Function", () => {
  it("should return the correct sum of two positive numbers", () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Action
    const result = sum(a, b);

    // Assert
    const expected = 5;
    assert.strictEqual(result, expected, "Sum of 2 and 3 should be 5");
  });

  it("should return the correct sum of two negative numbers", () => {
    // Arrange
    const a = -1;
    const b = -2;

    // Action
    const result = sum(a, b);

    // Assert
    const expected = -3;
    assert.strictEqual(result, expected, "Sum of -1 and -2 should be -3");
  });

  it("should return zero when both numbers are zero", () => {
    // Arrange
    const a = 0;
    const b = 0;

    // Action
    const result = sum(a, b);

    // Assert
    const expected = 0;
    assert.strictEqual(result, expected, "Sum of 0 and 0 should be 0");
  });

  it("should return the correct sum of a positive and a negative number", () => {
    // Arrange
    const a = -1;
    const b = 2;

    // Action
    const result = sum(a, b);

    // Assert
    const expected = 1;
    assert.strictEqual(result, expected, "Sum of -1 and 2 should be 1");
  });
});
