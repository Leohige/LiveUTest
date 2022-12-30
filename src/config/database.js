module.exports = {
    server: process.env['DATABASE_HOST'],
    authentication: {
        type: 'default',
        options: {
            userName: process.env['DATABASE_USER'],
            password: process.env['DATABASE_PASS'],
        }
    },
    options: {
        database: process.env['DATABASE_NAME'],
        encrypt: false,
        "rowCollectionOnRequestCompletion": true
    },
};
