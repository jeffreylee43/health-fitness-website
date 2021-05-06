const usersRoute = require('./users');

const constructorMethod = (app) => {
    app.use('/users', usersRoute);

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Provided route is not found' });
    });
};

module.exports = constructorMethod;