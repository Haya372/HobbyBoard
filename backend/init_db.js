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
    await models.Gather.create({
        user_id: 1,
        title: 'test',
        content: 'test'
    });
    await models.GatherParticipant.create({
        gather_id: 1,
        user_id: 1
    });
    await models.GatherParticipant.create({
        gather_id: 1,
        user_id: 2
    });
}

init();