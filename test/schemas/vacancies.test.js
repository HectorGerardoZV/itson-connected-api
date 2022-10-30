const { VacanciesSchema } = require("../../src/schemas");

describe("Testing Vacancies schema", () => {
    test("The vacancies schema must have a good structure. ", () => {
        const keys = VacanciesSchema.schema.obj;
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(keys.hasOwnProperty("major")).toBe(true);
        expect(keys.hasOwnProperty("company")).toBe(true);
        expect(keys.hasOwnProperty("created")).toBe(true);
        expect(keys.hasOwnProperty("generalData")).toBe(true);
        expect(keys.hasOwnProperty("activities")).toBe(true);
        expect(keys.hasOwnProperty("offer")).toBe(true);
        expect(keys.hasOwnProperty("requirements")).toBe(true);
        expect(keys.hasOwnProperty("limit")).toBe(true);
        expect(keys.hasOwnProperty("activated")).toBe(true);
        expect(Object.keys(keys).length).toBe(10);
    });
});
