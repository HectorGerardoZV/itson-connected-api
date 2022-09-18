const supertest = require('supertest');
const { generate } = require('shortid');

describe('Testing roles routes and controllers', () => {
    const request = supertest('http://localhost:3001');
    let idNewRole;

    test('Testing POST /roles', async () => {
        const newRole = {
            name: `role-${generate()}`,
        };
        const response = await request.post('/roles').send(newRole);
        idNewRole = response.body.idRole;
        expect(response.body.idRole).toBe(idNewRole);
        expect(response.body.name).toBe(newRole.name);
    });

    test('Should throw an error if we don\'t pass the role name', async () => {
        const newRole = {
            noName: `role-${generate()}`,
        };
        const response = await request.post('/roles').send(newRole);
        expect(response.body.msg).toBe('notNull Violation: roles.name cannot be null');
    });

    test('Testing GET /roles', async () => {
        const response = await request.get('/roles');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
        const role = response.body.find((roleAux) => roleAux.idRole === idNewRole);
        expect(role.name).toBe(response.body[response.body.length - 1].name);
    });

    test('Testing GET /roles/:idRole', async () => {
        const response = await request.get(`/roles/${idNewRole}`);
        expect(response.body.idRole).toBe(idNewRole);
    });

    test('Should get a null body in GET /roles/:idRole when the idRole is equal to -1', async () => {
        const response = await request.get(`/roles/${-1}`);
        expect(response.body).toBe(null);
    });

    test('Testing PUT /roles/:idRole', async () => {
        const responseGetById = await request.get(`/roles/${idNewRole}`);
        const oldRole = responseGetById.body;
        const newRoleInfo = {
            name: `role-${generate()}`,
        };
        const responseNewRole = await request.put(`/roles/${idNewRole}`).send(newRoleInfo);
        expect(responseNewRole.body.name).not.toBe(oldRole.name);
        expect(responseNewRole.body.idRole).toBe(oldRole.idRole);
    });

    test('Should throw an error in PUT /roles/:idRole if whe pass a invalid idRole', async () => {
        const newRoleInfo = {
            name: `role-${generate()}`,
        };
        const responseNegativeId = await request.put(`/roles/${-1}`).send(newRoleInfo);
        expect(responseNegativeId.body.msg).toBe('Cannot read properties of null (reading \'length\')');
    });

    test('Testing DELETE /roles/:idRole ', async () => {
        const response = await request.delete(`/roles/${idNewRole}`);
        expect(response.body.msg).toBe('Role deleted');
    });

    test('Should get a null body in DELETE /roles/:idRole when we pass a invalid idRole', async () => {
        const response = await request.delete(`/roles/${-1}`);
        expect(response.body.msg).toBe('Error: This role doesn\'t exist');
    });
});
