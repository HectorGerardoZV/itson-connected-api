const {RolesSchema  } = require('../../src/schemas');

describe('Testing Roles schema', () => {
    test('The roles schema must have a good structure. ', () => {
        const keys = RolesSchema.schema.obj;
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(Object.keys(keys).length).toBe(1);
    });

});
