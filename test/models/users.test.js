const { Users } = require('../../src/models/models.models');

describe('Testing Users model', () => {
    test('The users model must have a good structure.', () => {
        const user = new Users();
        expect(Object.prototype.hasOwnProperty.call(user, 'dataValues')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(user, 'uniqno')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(user, '_changed')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(user, '_options')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(user, 'isNewRecord')).toBe(true);
        expect(Object.keys(user).length).toBe(6);
    });
    test('The instance of the users model should have the correct attributes and types of the users model.', () => {
        const userInfo = {
            username: 'HéctorZapata',
            email: 'hector.zapata216792@potros.itson.edu.mx',
            idRole: 1,
            idProfile: 1,
            joined: new Date(),
        };
        const user = new Users(userInfo);
        const { dataValues } = user;
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idUser')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'username')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'email')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idRole')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'idProfile')).toBe(true);
        expect(Object.prototype.hasOwnProperty.call(dataValues, 'joined')).toBe(true);

        expect(dataValues.idUser).toBe(null);
        expect(typeof dataValues.username).toBe('string');
        expect(typeof dataValues.email).toBe('string');
        expect(typeof dataValues.idRole).toBe('number');
        expect(typeof dataValues.idProfile).toBe('number');
        expect(typeof dataValues.joined).toBe('object');
    });
});
