const catchExceptions = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(err);
    }

    res.status(500).send('Something broke!');
}

module.exports = {
    catchExceptions,
    errorHandler
}
