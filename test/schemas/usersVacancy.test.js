const { UsersVacancySchema } = require('../../src/schemas');

describe('Testing UsersVacancy schema', () => {
    test('The usersVacancy schema must have a good structure.', () => {
        const keys = UsersVacancySchema.schema.obj;
        expect(keys.hasOwnProperty("users")).toBe(true);
        expect(keys.hasOwnProperty("vacancy")).toBe(true);
        expect(Object.keys(keys).length).toBe(2);
    });
});
