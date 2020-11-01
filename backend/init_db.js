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
        title: 'fps',
        content: 'play with fortnite',
        good: 0,
        bad: 0,
        secret: false
    });
    await models.Gather.create({
        user_id: 2,
        title: 'watch a movie',
        content: 'watch at lias movie theater',
        good: 0,
        bad: 0,
        secret: false
    });
    await models.GatherParticipant.create({
        gather_id: 1,
        user_id: 1
    });
    await models.GatherParticipant.create({
        gather_id: 1,
        user_id: 2
    }); 
    await models.GatherComment.create({
        gather_id: 1,
        user_id: 2,
        comment: 'hello',
        good: 0,
        bad: 0,
        secret: false,
    }); 
    await models.Hobby.create({
        user_id: 1,
        title: 'Muscle',
        content: 'Make you god',
        good: 0,
        bad: 0,
        secret: false
    });
    await models.Hobby.create({
        user_id: 1,
        title: 'Tennis',
        content: 'I wanna do it with you.',
        good: 0,
        bad: 0,
        secret: false
    });
    await models.HobbyComment.create({
        user_id: 2,
        hobby_id: 1,
        comment: 'hello',
        good: 0,
        bad: 0,
        secret: false
    });
}

init();
