const { CompanyProfiles } = require('../../src/models/models.models');

describe('Testing CompanyProfiles model', () => {
    test('The companyProfiles model must have a good structure. ', () => {
        const companyProfile = new CompanyProfiles();
        expect(Object.prototype.hasOwnProperty.call(companyProfile, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(companyProfile, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(companyProfile, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(companyProfile, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(companyProfile, 'isNewRecord')).toBe(true);
        expect(Object.keys(companyProfile).length).toBe(6);
    });

    test('The instance of the companyProfiles model should have the correct attributes and types of the companyProfiles model ', () => {
        const companyProfileInfo = {
            idCompanyProfile: 1,
            fullName: 'Google',
            location: 'California-usa',
            numberOfEmployees: '50000',
            description: 'This is google',
            verified: true,
            image: 'google.png',
        };
        const companyProfile = new CompanyProfiles(companyProfileInfo);
        const { dataValues } = companyProfile;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idCompanyProfile')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'fullName')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'location')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'numberOfEmployees')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'description')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'verified')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'image')).toBe(true);

        expect(typeof dataValues.idCompanyProfile).toBe('number');
        expect(typeof dataValues.fullName).toBe('string');
        expect(typeof dataValues.location).toBe('string');
        expect(typeof dataValues.numberOfEmployees).toBe('string');
        expect(typeof dataValues.description).toBe('string');
        expect(typeof dataValues.verified).toBe('boolean');
        expect(typeof dataValues.image).toBe('string');
    });
});
