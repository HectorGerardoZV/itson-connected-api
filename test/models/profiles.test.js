const { Profiles } = require('../../src/models/models.models');

describe('Testing Profiles model', () => {
    test('The profiles model must have a good structure. ', () => {
        const profiles = new Profiles();
        expect(Object.prototype.hasOwnProperty.call(profiles, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(profiles, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(profiles, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(profiles, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(profiles, 'isNewRecord')).toBe(true);
        expect(Object.keys(profiles).length).toBe(6);
    });

    test('The instance of the profiles model should have the correct attributes and types of the profiles model ', () => {
        const profileInfo = {
            idProfile: 1,
            idStudentProfile: 2,
            idCompanyProfileId: 3,
        };
        const profiles = new Profiles(profileInfo);
        const { dataValues } = profiles;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idProfile')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idStudentProfile')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idCompanyProfileId')).toBe(true);
        expect(typeof dataValues.idProfile).toBe('number');
        expect(typeof dataValues.idStudentProfile).toBe('number');
        expect(typeof dataValues.idCompanyProfileId).toBe('number');
    });
});
