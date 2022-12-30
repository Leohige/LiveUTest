const userService = require("./../services/user.service")

async function discoverForm(req, res, next) {
    res.render('users/discover');
}

async function discover(req, res, next) {
    const { name, surname, email } = req.body;
    const [ animal, country, color ] = await userService.getAnimalColorAndCountry(name, surname, email);

    res.render('users/discover', { result: { animal, country, color } });
}

module.exports = {
    discoverForm,
    discover
};
