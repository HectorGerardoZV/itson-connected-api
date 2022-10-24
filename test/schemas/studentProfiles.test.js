const { StudentProfilesSchema } = require('../../src/schemas');

describe('Testing StudentProfiles schema', () => {
    test('The studentProfiles schema must have a good structure. ', () => {
        const keys = StudentProfilesSchema.schema.obj;
        expect(keys.hasOwnProperty("image")).toBe(true);
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(keys.hasOwnProperty("user")).toBe(true);
        expect(keys.hasOwnProperty("idUniversity")).toBe(true);
        expect(keys.hasOwnProperty("semester")).toBe(true);
        expect(keys.hasOwnProperty("description")).toBe(true);
        expect(keys.hasOwnProperty("cv")).toBe(true);
        expect(keys.hasOwnProperty("major")).toBe(true);
        expect(Object.keys(keys).length).toBe(8);
    });
});
