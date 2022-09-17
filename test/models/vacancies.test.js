const { Vacancies } = require('../../src/models/models.models');

describe('Testing Vacancies model', () => {
    test('The vacancies model must have a good structure. ', () => {
        const vacancies = new Vacancies();
        expect(Object.prototype.hasOwnProperty.call(vacancies, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(vacancies, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(vacancies, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(vacancies, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(vacancies, 'isNewRecord')).toBe(true);
        expect(Object.keys(vacancies).length).toBe(6);
    });

    test('The instance of the vacancies model should have the correct attributes and types of the vacancies model ', () => {
        const vacancyInfo = {
            idVacancy: 1,
            idCompany: 1,
            created: new Date(),
            generalData: 'General',
            activities: 'Activities',
            offer: 'Offer',
            requirements: 'Requirements',
        };
        const profiles = new Vacancies(vacancyInfo);
        const { dataValues } = profiles;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idVacancy')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idCompany')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'created')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'generalData')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'activities')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'offer')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'requirements')).toBe(true);

        expect(typeof dataValues.idVacancy).toBe('number');
        expect(typeof dataValues.idCompany).toBe('number');
        expect(typeof dataValues.created).toBe('object');
        expect(typeof dataValues.generalData).toBe('string');
        expect(typeof dataValues.activities).toBe('string');
        expect(typeof dataValues.offer).toBe('string');
        expect(typeof dataValues.requirements).toBe('string');
    });
});
