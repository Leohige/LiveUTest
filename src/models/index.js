const database = require('./../lib/database');

module.exports = {
    User: require('./user.model')(database),
};
