const supertest = require("supertest");
const app = require("../../src/main");
const { generate } = require("shortid");

describe("Testing users routes and controllers", () => {
    const request = supertest(app);
    let idNewUser;
    let idRole;
    beforeEach(async () => {
        const result = await request.get("/roles");
        idRole = result.body[result.body.length - 1]._id;
    });

    test("Testing POST /users ", async () => {
        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            password: "82783zap",
            role: idRole,
        };
        const response = await request.post("/users").send(newUser);
        idNewUser = response.body._id;
        expect(response.body.username).toBe(newUser.username);
        expect(response.body.email).toBe(newUser.email);
        expect(response.body.password).not.toBe(newUser.password);
        expect(response.body.role).toBe(newUser.role);
    });

    test("Testing POST /users invalid values", async () => {
        const newUser = {
            username: ``,
            email: ``,
            password: "",
            role: "",
        };
        const { body } = await request.post("/users").send(newUser);
        const { errors } = body;
        expect(errors.length).toBe(8);
        expect(errors[0].param).toBe("username");
        expect(errors[0].msg).toBe("username is required");
        expect(errors[1].param).toBe("username");
        expect(errors[1].msg).toBe("username too short");

        expect(errors[2].param).toBe("email");
        expect(errors[2].msg).toBe("email is required");
        expect(errors[3].param).toBe("email");
        expect(errors[3].msg).toBe("invalid email format");

        expect(errors[4].param).toBe("password");
        expect(errors[4].msg).toBe("password is required");
        expect(errors[5].param).toBe("password");
        expect(errors[5].msg).toBe("password is too short");

        expect(errors[6].param).toBe("role");
        expect(errors[6].msg).toBe("role is required");
        expect(errors[7].param).toBe("role");
        expect(errors[7].msg).toBe("invalid role");
    });

    test("Testing GET /users", async () => {
        const response = await request.get("/users");
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("Testing GET /users/:idUser", async () => {
        const responseGetAll = await request.get("/users");
        const userById = responseGetAll.body[responseGetAll.body.length - 1];
        const response = await request.get(`/users/${userById._id}`);
        const user = response.body;
        expect(user._id).toBe(userById._id);
        expect(user.username).toBe(userById.username);
        expect(user.email).toBe(userById.email);
        expect(user.role).toBe(userById.role);
    });

    test("Testing GET /users/:idUser invalid id", async () => {
        const { body } = await request.get(`/users/${1}`);
        const { errors } = body;
        expect(errors.length).toBe(2);
        expect(errors[0].param).toBe("idUser");
        expect(errors[0].msg).toBe("Invalid id product must be a string");
        expect(errors[1].param).toBe("idUser");
        expect(errors[1].msg).toBe("Invalida id product");
    });

    test("Testing UPDATE /users/:idUser", async () => {
        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            role: idRole,
        };
        const responseGet = await request.get(`/users/${idNewUser}`);
        const lastUser = responseGet.body;
        const responsePost = await request.put(`/users/${idNewUser}`).send(newUser);
        const userUpdated = responsePost.body;
        expect(lastUser._id).toBe(userUpdated._id);
        expect(lastUser.usernam).not.toBe(userUpdated.username);
        expect(lastUser.email).not.toBe(userUpdated.email);
    });
    test("Testing UPDATE /users/:idUser invalid id and information", async () => {
        const newUser = {
            username: ``,
            email: ``,
            role: idRole,
        };
        const { body } = await request.put(`/users/${idNewUser}`).send(newUser);
        const { errors } = body;
        expect(errors[0].param).toBe("username");
        expect(errors[0].msg).toBe("username too short");
        expect(errors[1].param).toBe("email");
        expect(errors[1].msg).toBe("invalid email format");
    });

    test("Testing DELETE /users/:idUser invalid id", async () => {
        const {body} = await request.delete(`/users/${1}`);
        const {errors} = body;

        expect(errors[0].param).toBe("idUser");
        expect(errors[0].msg).toBe("Invalid id product must be a string");
        expect(errors[1].param).toBe("idUser");
        expect(errors[1].msg).toBe("Invalid id product");
    
    });
    test("Testing DELETE /users/:idUser", async () => {
        const response = await request.delete(`/users/${idNewUser}`);
        const result = response.body;
        expect(result.msg).toBe("User deleted");
    });
});
