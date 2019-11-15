const PubSub = require('./pub-sub.js')

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ":" + ((this.getSeconds() < 10) ? "0" : "") + this.getSeconds();
}
Date.prototype.today = function () {
    return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}
const grid = {
    refreshData: function () {
        console.log('retrieve latest data from data cache')
        console.log('updated grid component')
    },
    updateCounter: function () {
        console.log('data last updated at:', getCurrentTime())
    }
}

// a very basic mediator
var gridUpdate = function (topics, data) {
    grid.refreshData()
    grid.updateCounter()
}

var dataSubscription = PubSub.subscribe('dataUpdated', gridUpdate)

PubSub.publish('dataUpdated', 'new stock data available')
PubSub.publish('dataUpdated', 'new stock available')

function getCurrentTime() {
    let date = new Date(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        y = date.getFullYear(),
        t = date.toLocaleDateString().toLowerCase(),
        timeNow = date.timeNow(),
        today = date.today()
    return (today + ' -> ' + timeNow)
}
