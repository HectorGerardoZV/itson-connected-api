const models = require('../../src/models/models.models');

describe('Testing models component', () => {
    test('The models component must have a good structure. ', () => {
        expect(Object.prototype.hasOwnProperty.call(models, "Users")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "Vacancies")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "Roles")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "Profiles")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "CompanyProfiles")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "StudentProfiles")).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(models, "Majors")).toBe(true);
        expect(Object.keys(models).length).toBe(7);
    });
});