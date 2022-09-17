const { Majors } = require('../../src/models/models.models');

describe('Testing Majors model', () => {
    test('The majors model must have a good structure.', () => {
        const majors = new Majors();
        expect(Object.prototype.hasOwnProperty.call(majors, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(majors, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(majors, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(majors, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(majors, 'isNewRecord')).toBe(true);
        expect(Object.keys(majors).length).toBe(6);
    });

    test('The instance of the majors model should have the correct attributes and types of the majors model ', () => {
        const majorInfo = {
            idMajor: 1,
            name: 'isw',
        };
        const major = new Majors(majorInfo);
        const { dataValues } = major;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idMajor')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'name')).toBe(true);
        expect(typeof dataValues.idMajor).toBe('number');
        expect(typeof dataValues.name).toBe('string');
    });
});
