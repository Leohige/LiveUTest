const apiService = require("./../services/api.service");
const { User } = require("../models")

const getAnimalColorAndCountry = async (name, surname, email) => {
    const [ nameCod, surnameCod, emailCod ] = await apiService.getNameSurnameAndEmailCodes(name, surname, email);

    await User.insertNameSurnameAndEmail(
        name,
        nameCod,
        surname,
        surnameCod,
        email,
        emailCod
    );
        
    const sums = await User.getNameSurnameAndEmailSum(
        nameCod,
        surnameCod,
        emailCod
    );
            
    const total = sums.reduce((total, sum) => {
        return total + parseInt(sum.cod) + parseInt(sum.soma);
    }, 0);
            
    return await User.getAnimalColorAndCountry(total);
}
        
module.exports = {
    getAnimalColorAndCountry
}
