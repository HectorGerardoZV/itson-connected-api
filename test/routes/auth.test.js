const supertest = require("supertest");
const { generate } = require("shortid");
const app = require("../../src/main");

describe("Testing auth routes and controller", () => {
    const request = supertest(app);
    let idUser;
    let idRole;
    let username;
    let tokenJWT;
    let password = "otherPassword";
    beforeEach(async () => {
        const result = await request.get("/roles");
        idRole = result.body[result.body.length - 1]._id;

        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            password,
            role: idRole,
        };
        const resopnse = await request.post("/users").send(newUser);
        idUser = resopnse.body._id;
        username = resopnse.body.username;
    });

    test("Testing POST /auth ", async () => {
        const loginInfo = {
            username: username,
            password,
        };
        const response = await request.post("/auth").send(loginInfo);
        expect(Object.prototype.hasOwnProperty.call(response.body, "token")).toBe(true);
        tokenJWT = `Bearer ${response.body.token}`;
    });

    test("Testing GET /auth", async () => {
        const response = await request.get("/auth").set("Authorization", tokenJWT);
        expect(response.body.access).toBe(true);
    });

    afterAll(async () => {
        await request.delete(`/users/${idUser}`);
    });
});
