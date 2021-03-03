const models = require('./models');

for(var i = 0; i < 30; i++){
    models.HobbyComment.create({
        user_id: 2,
        hobby_id: 1,
        comment: 'comment' + i,
        good: 0,
        bad: 0,
        secret: false
    });
}