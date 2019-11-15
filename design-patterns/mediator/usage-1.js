const mediator = require('./mediator')

function changeName(m, name) {
    var person = "Luke";
    m.subscribe('nameChange', function (arg) {
        console.log(person);
        person = arg;
        console.log(person);
    });
    m.publish('nameChange', name);
    return m
}

changeName(mediator, 'Vasi')
