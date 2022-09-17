const {rolesController} = require('../../src/controllers/controllers.controller');

describe('Testing roles controller', () => {
    test('The roles controller component must have a good structure.', async() => {
       expect(Object.prototype.hasOwnProperty.call(rolesController, "addNewRole")).toBe(true);
       expect(Object.prototype.hasOwnProperty.call(rolesController, "getRoleById")).toBe(true);
       expect(Object.prototype.hasOwnProperty.call(rolesController, "updateRoleById")).toBe(true);
       expect(Object.prototype.hasOwnProperty.call(rolesController, "deleteRoleById")).toBe(true);
       expect(Object.prototype.hasOwnProperty.call(rolesController, "getAllRoles")).toBe(true);
       expect(Object.keys(rolesController).length).toBe(5);
    });
    test('The types of the rolesController properties must be functions.', async() => {
       expect(typeof rolesController.addNewRole).toBe('function');
       expect(typeof rolesController.getRoleById).toBe('function');
       expect(typeof rolesController.updateRoleById).toBe('function');
       expect(typeof rolesController.deleteRoleById).toBe('function');
       expect(typeof rolesController.getAllRoles).toBe('function');
    });
});
