const PubSub = require('./pub-sub.js')

let grid = {
    addEntry: function (data) {
        if (data !== 'undefined') {
            console.log(
                'entry: ' +
                data.title +
                'Changenet / %' +
                data.changenet + '/' +
                data.percentage + '%'
            )
        }
    },
    updateCounter: function (timestamp) {
        console.log('grid last updated at: ' + timestamp);
    }
}

let gridUpdate = function (topics, data) {
    grid.addEntry(data);
    grid.updateCounter(data.timestamp);
}

let gridSubscription = PubSub.subscribe('dataUpdated', gridUpdate);

PubSub.publish('dataUpdated', {
    title: "Microsoft shares",
    changenet: 4,
    percentage: 33,
    timestamp: '17:34:12'
});

PubSub.publish('dataUpdated', {
    title: "Dell shares",
    changenet: 10,
    percentage: 20,
    timestamp: '17:35:16'
});