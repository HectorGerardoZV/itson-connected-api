const { CompanyProfilesSchema } = require("../../src/schemas");
describe("Testing CompanyProfiles schema", () => {
    test("The companyProfiles schema must have a good structure. ", () => {
        const keys = CompanyProfilesSchema.schema.obj;
        expect(keys.hasOwnProperty("image")).toBe(true);
        expect(keys.hasOwnProperty("name")).toBe(true);
        expect(keys.hasOwnProperty("user")).toBe(true);
        expect(keys.hasOwnProperty("location")).toBe(true);
        expect(keys.hasOwnProperty("employees")).toBe(true);
        expect(keys.hasOwnProperty("description")).toBe(true);
        expect(keys.hasOwnProperty("verified")).toBe(true);
        expect(Object.keys(keys).length).toBe(7);
    });

});
