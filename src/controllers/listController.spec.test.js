import { describe, it } from "mocha";
import { expect } from "chai";
import { List } from "../models/associations.js";

const apiBaseUrl = `http://localhost:${process.env.PORT}`;

describe("Lists endpoints", () => {
	describe("[GET] /lists", () => {
		it("should return a 200 http code", async () => {
			const response = await fetch(`${apiBaseUrl}/lists`);

			expect(response.status).to.equal(200);
		});

		it("should return an empty array of lists", async () => {
			const response = await fetch(`${apiBaseUrl}/lists`);
			const lists = await response.json();

			expect(lists.length).to.equal(0);
		});

		it("should return an array", async () => {
			const response = await fetch(`${apiBaseUrl}/lists`);
			const lists = await response.json();

			expect(lists).to.be.a("array");
		});

		it("should return and array of all lists", async () => {
			await List.create({ title: "New liste" });
			await List.create({ title: "New liste 2" });

			const response = await fetch(`${apiBaseUrl}/lists`);
			const lists = await response.json();
			// ? bancale
			expect(lists[1].title).to.equal("New liste");
			expect(lists[0].title).to.equal("New liste 2");
		});

		it("should return an object", async () => {
			const list = await List.create({ title: "New liste" });

			const response = await fetch(`${apiBaseUrl}/lists/${list.id}`);
			const listObj = await response.json();

			expect(listObj).to.be.a("object");
		});

		it("should return one list", async () => {
			const list = await List.create({ title: "New liste" });

			const response = await fetch(`${apiBaseUrl}/lists/${list.id}`);
			const listResp = await response.json();

			expect(listResp.title).to.equal("New liste");
		});

		it("should return a deep equal object", async () => {
			const list = await List.create({ title: "New liste" });

			const response = await fetch(`${apiBaseUrl}/lists/${list.id}`);
			const listResp = await response.json();

			expect(listResp).to.deep.equal(JSON.parse(JSON.stringify(list)));
		});

		it("should return 404", async () => {
			await List.create({ title: "New liste" });

			const response = await fetch(`${apiBaseUrl}/lists/120`);

			expect(response.status).to.equal(404);
		});
	});

	describe("[POST] /lists", () => {
		it("should return an 201 status code", async () => {
			const listObj = {
				title: "New liste",
			};

			const response = await fetch(`${apiBaseUrl}/lists`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
				body: JSON.stringify(listObj),
			});

			expect(response.status).to.equal(201);
		});

		it("should return an object", async () => {
			const listObj = {
				title: "New liste",
			};

			const response = await fetch(`${apiBaseUrl}/lists`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
				body: JSON.stringify(listObj),
			});

			const list = await response.json();

			expect(list).to.be.a("object");
		});

		it("should return an 400 status code", async () => {
			const listObj = {
				content: "New liste",
			};

			const response = await fetch(`${apiBaseUrl}/lists`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-type": "application/json",
				},
				body: JSON.stringify(listObj),
			});

			expect(response.status).to.equal(400);
		});
		// ! ... to be continued tester destroy, tester update etc etc
		// ! ... faire la même avec cardController
	});
});
