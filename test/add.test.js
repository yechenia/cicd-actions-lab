import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { add } from "../src/add.js";

describe("add", () => {
  it("adds two positive numbers", () => {
    assert.equal(add(1, 2), 3);
  });

  it("adds negative numbers", () => {
    assert.equal(add(-4, -6), -10);
  });

  it("adds zero", () => {
    assert.equal(add(7, 0), 7);
  });
});
