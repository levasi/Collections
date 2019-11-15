const PubSub = require('./pub-sub.js')

var testSubscriber = function (topics, data) {
    console.log(topics + ": " + data);
};

var testSubscription = PubSub.subscribe('example1', testSubscriber);

PubSub.publish('example1', 'hello world!');
PubSub.publish('example1', ['test', 'a', 'b', 'c']);
PubSub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello' }]);

setTimeout(function () {
    PubSub.unsubscribe(testSubscription);
}, 0);

PubSub.publish('example1', 'hello again!');