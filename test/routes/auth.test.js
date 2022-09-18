const supertest = require("supertest");
const {generate} = require('shortid');

describe("Testing auth routes and controller", () => {
    const request = supertest("http://localhost:3001");
    let idUser;
    let username;
    let tokenJWT;
    let password = 'otherPassword';
    beforeEach(async () => {
        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            password,
            idRole: 1,
        };
        const resopnse = await request.post("/users").send(newUser);
        idUser = resopnse.body.idUser;
        username = resopnse.body.username;
    });

    test("Testing POST /auth ", async () => {
        const loginInfo = {
            username: username,
            password
        };
        const response = await request.post("/auth").send(loginInfo);
        expect(Object.prototype.hasOwnProperty.call(response.body,'token')).toBe(true);
        tokenJWT = `Bearer ${response.body.token}`;
    });

    test('Testing GET /auth', async() => {
        const response = await request.get('/auth').set('Authorization', tokenJWT);
        expect(response.body.access).toBe(true);
    });

    afterAll(async () => {
        await request.delete(`/users/${idUser}`);
    });
});
