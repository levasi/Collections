//Basic
let mySingleton = {
    property1: "something",
    property2: "something else",
    method1: function () {
        console.log('hello world');
    }
}

// Further
let otherSingleton = function () {
    let privateVariable = 'something private'
    function showPrivate() {
        console.log(privateVariable)
    }
    return {
        publicMethod: function () {
            showPrivate()
        },
        publicVar: 'something public'
    }
}

var otherSingletonInstance = new otherSingleton()

// otherSingletonInstance.publicMethod()
// console.log(otherSingletonInstance.publicVar)

// Instantiate where needed
let Singleton = (function () {
    let instantiated
    function init() {
        return {
            publicMethod: function () {
                console.log('publicMethod call')
            },
            publicProperty: 'publicProperty access'
        }
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init()
            }
            return instantiated
        }
    }
})()

// Singleton.getInstance().publicMethod()
// console.log(Singleton.getInstance().publicProperty)

let SingletonTester = (function () {

    function Singleton(options) {
        options = options || {}
        this.name = 'Singleton Tester'
        this.pointX = options.pointX || 6
        this.pointY = options.pointY || 10
    }

    let instance

    var _static = {
        name: 'SingletonTester',
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options)
            }
            return instance
        }
    }
    return _static

})()

let singletonTest = SingletonTester.getInstance({
    pointX: 16
})

console.log(singletonTest.pointX)