const models = require('./models');

const init = async function() {
    await models.User.create({
        password: 'pass',
        username: 'Ishii',
        sex: 'male',
        age: '22'
    });
    await models.User.create({
        password: 'pass',
        username: 'Tanimoto',
        sex: 'male',
        age: '22'
    });
    await models.User.create({
        password: 'pass',
        username: 'Mitomi',
        sex: 'male',
        age: '22'
    });
}

init();