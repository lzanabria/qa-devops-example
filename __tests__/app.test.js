const request = require("supertest");
const app = require("../app");

describe("API Demo Calidad", () => {
    test("POST /sumar con parámetros válidos", async () => {
        const res = await request(app)
            .post("/sumar")
            .send({ a: 2, b: 3 });
        expect(res.statusCode).toBe(200);
        expect(res.body.resultado).toBe(5);
    });

    test("POST /sumar con parámetros inválidos", async () => {
        const res = await request(app)
            .post("/sumar")
            .send({ a: "x", b: 3 });
        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("error");
    });
});
