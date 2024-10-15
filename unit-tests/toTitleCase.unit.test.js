import { describe, it } from "node:test";
import assert from "node:assert";
import { toTitleCase } from "./toTitleCase.js";

describe("toTitleCase()", () => {
	it("Mot en minuscules", () => {
		const result = toTitleCase("oclock");
		assert.equal(result, "Oclock");
	});
	it("Mot avec un chiffre", () => {
		const result = toTitleCase("ocl0ck");
		assert.equal(result, "Ocl0ck");
	});
	it("String vide", () => {
		const result = toTitleCase("");
		assert.equal(result, "");
	});
	it("Phrase", () => {
		const result = toTitleCase("oclock c'est pas top ca rime");
		assert.equal(result, "Oclock C'est Pas Top Ca Rime");
	});
});
