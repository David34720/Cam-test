import { describe, it } from "mocha";
import { expect } from "chai";
import { Card } from "../models/associations.js";

const apiBaseUrl = `http://localhost:${process.env.PORT}`;

describe("Card endpoints", () => {
	describe("[GET] /cards", () => {
		it("should return a 200 http code", async () => {
			const response = await fetch(`${apiBaseUrl}/cards`);

			expect(response.status).to.equal(200);
		});

		it("should return one card", async () => {
			await Card.drop();
			const card = await Card.create({ title: "New card" });
			console.log(card);
			const response = await fetch(`${apiBaseUrl}/cards/${card.id}`);
			const cards = await response.json();

			expect(cards.title).to.equal("New card");
		});
	});
});
