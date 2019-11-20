var myModule = {
    myProperty: 'someValue',
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    myMethod: function () {
        console.log('I can haz functionality')
    },
    myMethod2: function () {
        console.log('Caching is: ' + (this.myConfig.useCaching) ? 'enabled' : 'disabled')
    },
    myMethod3: function () {
        if (typeof newConfig == 'object') {
            this.myConfig = newConfig
            console.log(this.myConfig.language)
        }
    }
}

// myModule.myMethod()
// myModule.myMethod2()
// myModule.myMethod3()

var testModule = (function () {
    let counter = 0
    return {
        incrementCounter: function () {
            return counter++
        },
        resetCounter: function () {
            console.log('counter value prior to reset: ' + counter)
            counter = 0
        }
    }
})()

// testModule.incrementCounter()
// testModule.resetCounter()

var basketModule = (function () {
    let basket = [];
    function doSomethingPrivate() { }
    function doSomethingElsePrivate() { }
    return {
        addItem: function (values) {
            basket.push(values);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate(),
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0; while (q--) {
                    p += basket[q].price;
                }
            return p;
        }
    }
}());

// basketModule.addItem({
//     item: 'bread', price: 0.5
// });
// basketModule.addItem({
//     item: 'butter', price: 0.3
// });
// console.log(basketModule.getItemCount());
// console.log(basketModule.getTotal());
// console.log(basketModule.basket);
// console.log(basket);

// Simple template
var someModule = (function () {
    var privateVar = 5;
    var privateMethod = function () {
        return 'Private Test';
    };
    return {
        publicVar: 10,
        publicMethod: function () {
            return ' Followed By Public Test ';
        },
        getData: function () {
            return privateMethod() + this.publicMethod() + privateVar;
        }
    }
})();
console.log(someModule.getData())
