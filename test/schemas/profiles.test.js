const { ProfilesSchema } = require('../../src/schemas');

describe('Testing Profiles schema', () => {
    test('The profiles schema must have a good structure. ', () => {
        const keys = ProfilesSchema.schema.obj;
        expect(keys.hasOwnProperty("image")).toBe(true);
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(keys.hasOwnProperty("user")).toBe(true);
        expect(Object.keys(keys).length).toBe(3);
    });

});
