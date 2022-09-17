const { StudentProfiles } = require('../../src/models/models.models');

describe('Testing StudentProfiles model', () => {
    test('The studentProfiles model must have a good structure. ', () => {
        const studentProfiles = new StudentProfiles();
        expect(Object.prototype.hasOwnProperty.call(studentProfiles, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(studentProfiles, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(studentProfiles, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(studentProfiles, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(studentProfiles, 'isNewRecord')).toBe(true);
        expect(Object.keys(studentProfiles).length).toBe(6);
    });

    test('The instance of the studentProfiles model should have the correct attributes and types of the studentProfiles model ', () => {
        const studentProfilesInfo = {
            idStudentProfile: 1,
            idStudent: '00000212121',
            fullName: 'Hector Zapata',
            semester: '7mo',
            idMajor: 1,
            description: "I'm Héctor",
            image: 'hector.png',
        };
        const studentProfiles = new StudentProfiles(studentProfilesInfo);
        const { dataValues } = studentProfiles;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idStudentProfile')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idStudent')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'fullName')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'semester')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idMajor')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'description')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'image')).toBe(true);

        expect(typeof dataValues.idStudentProfile).toBe('number');
        expect(typeof dataValues.idStudent).toBe('string');
        expect(typeof dataValues.fullName).toBe('string');
        expect(typeof dataValues.semester).toBe('string');
        expect(typeof dataValues.idMajor).toBe('number');
        expect(typeof dataValues.description).toBe('string');
        expect(typeof dataValues.image).toBe('string');
    });
});
