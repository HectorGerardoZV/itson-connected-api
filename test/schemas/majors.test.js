const { MajorsSchema } = require('../../src/schemas');

describe('Testing Majors schema', () => {
    test('The majors schema must have a good structure.', () => {
        const keys = MajorsSchema.schema.obj;
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(keys.hasOwnProperty("acronym")).toBe(true);
        expect(keys.hasOwnProperty("semesters")).toBe(true);
        expect(Object.keys(keys).length).toBe(3);
    });

});
