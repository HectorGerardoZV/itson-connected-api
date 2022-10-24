const { UsersSchema } = require('../../src/schemas');

describe('Testing Users schema', () => {
    test('The users schema must have a good structure.', () => {
        const keys = UsersSchema.schema.obj;
        expect(keys.hasOwnProperty("username")).toBe(true);
        expect(keys.hasOwnProperty("email")).toBe(true);
        expect(keys.hasOwnProperty("password")).toBe(true);
        expect(keys.hasOwnProperty("role")).toBe(true);
        expect(Object.keys(keys).length).toBe(4);
    });
});
