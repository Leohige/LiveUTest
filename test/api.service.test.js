const apiService = require("../src/services/api.service");

describe('api service', () => {
    test('should get correct name, surname and email code', async () => {
        const name = 'Leandro';
        const surname = 'Matheus';
        const email = 'leohige@outlook.com';

        const result = await apiService.getNameSurnameAndEmailCodes(name, surname, email);

        expect(result).toEqual([
            "709", 
            "727", 
            "1943"
        ]);
    });
});
