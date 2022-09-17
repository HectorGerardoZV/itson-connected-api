const { Roles } = require('../../src/models/models.models');

describe('Testing Roles model', () => {
    test('The roles model must have a good structure. ', () => {
        const roles = new Roles();
        expect(Object.prototype.hasOwnProperty.call(roles, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(roles, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(roles, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(roles, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(roles, 'isNewRecord')).toBe(true);
        expect(Object.keys(roles).length).toBe(6);
    });

    test('The instance of the roles model should have the correct attributes and types of the roles model ', () => {
        const roleInfo = {
            idRole: 1,
            name: 'Student',
        };
        const roles = new Roles(roleInfo);
        const { dataValues } = roles;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idRole')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'name')).toBe(true);
        expect(typeof dataValues.idRole).toBe('number');
        expect(typeof dataValues.name).toBe('string');
    });
});
