const pubsub = require('./pub-sub.js')

var testSubscriber = function (topics, data) {
    console.log(topics + ": " + data);
};

var testSubscription = pubsub.subscribe('example1', testSubscriber);

pubsub.publish('example1', 'hello world!');
pubsub.publish('example1', ['test', 'a', 'b', 'c']);
pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello' }]);

setTimeout(function () {
    pubsub.unsubscribe(testSubscription);
}, 0);

pubsub.publish('example1', 'hello again!');