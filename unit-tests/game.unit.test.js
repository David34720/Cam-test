import { describe, it } from "node:test";
import assert from "node:assert";
import { calcXp } from "./game.js";

describe("calcXp(level)", () => {
	it("Niveau 1", () => {
		const result = calcXp(1);
		assert.equal(result, 1);
	});
	it("Niveau 5", () => {
		const result = calcXp(5);
		assert.equal(result, 5);
	});
	it("Niveau 50", () => {
		const result = calcXp(50);
		assert.equal(result, 50);
	});
	it("Niveau 51", () => {
		const result = calcXp(51);
		assert.equal(result, 50);
	});
	it("Niveau 52", () => {
		const result = calcXp(52);
		assert.equal(result, 51);
	});
	it("Niveau 100", () => {
		const result = calcXp(100);
		assert.equal(result, 75);
	});
	it("Niveau 101", () => {
		const result = calcXp(101);
		assert.equal(result, 75);
	});
	it("Niveau 200", () => {
		const result = calcXp(200);
		assert.equal(result, 108);
	});
	it("Niveau 205", () => {
		const result = calcXp(205);
		assert.equal(result, 109);
	});
	it("Niveau 500", () => {
		const result = calcXp(500);
		assert.equal(result, 168);
	});
});
