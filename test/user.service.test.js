const userService = require("../src/services/user.service");

describe('user service', () => {
    test('should get correct animal, color and country', async () => {
        const name = 'Leandro';
        const surname = 'Matheus';
        const email = 'leohige@outlook.com';
        
        const result = await userService.getAnimalColorAndCountry(name, surname, email);
        
        expect(result).toEqual([
            {"name": "Crocodilo "}, 
            {"name": "Bósnia-Herzegovina"}, 
            {"name": "Azul flor de milho"}
        ]);
    });
});
