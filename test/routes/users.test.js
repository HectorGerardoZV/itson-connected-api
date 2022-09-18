const supertest = require('supertest');
const { generate } = require('shortid');

describe('Testing users routes and controllers', () => {
    const request = supertest('http://localhost:3001');
    let idNewUser;
    test('Testing POST /users ', async() => {
        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            password: '82783zap',
            idRole: 1
        }
        const response = await request.post('/users').send(newUser);
        idNewUser = response.body.idUser;
        expect(response.body.username).toBe(newUser.username);
        expect(response.body.email).toBe(newUser.email);
        expect(response.body.password).not.toBe(newUser.password);
        expect(response.body.idRole).toBe(newUser.idRole);
    });

    test('Testing GET /users', async() => {
        const response = await request.get('/users');
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Testing GET /users/:idUser', async() => {
        const responseGetAll = await request.get('/users');
        const userById = responseGetAll.body[responseGetAll.body.length-1];
        const response = await request.get(`/users/${idNewUser}`);
        const user = response.body;
        expect(user.idUser).toBe(userById.idUser);
        expect(user.username).toBe(userById.username);
        expect(user.email).toBe(userById.email);
        expect(user.idRole).toBe(userById.idRole);
    });
  
    test('Testing UPDATE /users/:idUser', async() => {
        const newUser = {
            username: `newUser-${generate()}`,
            email: `email-${generate()}@email.com`,
            idRole: 1
        }
        const responseGet = await request.get(`/users/${idNewUser}`);
        const lastUser = responseGet.body;
        const responsePost = await request.put(`/users/${idNewUser}`).send(newUser);
        const userUpdated = responsePost.body;
        expect(lastUser.idUSer).toBe(userUpdated.idUSer);
        expect(lastUser.usernam).not.toBe(userUpdated.username);
        expect(lastUser.email).not.toBe(userUpdated.email);

    });

    test('Testing DELETE /users/:idUser', async() => {
        const response = await request.delete(`/users/${idNewUser}`);
        const result = response.body;
        expect(result.msg).toBe('User deleted')
    });
});
