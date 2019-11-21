function MacBook() {
    this.cost = function () {
        return 997
    }
    this.screenSize = function () {
        return 13.3
    }
}
function Memory(macbook) {
    var v = macbook.cost()
    macbook.cost = function () {
        return v + 75
    }
}
function Engraving(macbook) {
    var v = macbook.cost()
    macbook.cost = function () {
        return v + 200
    }
}
function Insurance(macbook) {
    var v = macbook.cost()
    macbook.cost = function () {
        return v + 250
    }
}
var mb = new MacBook()

Memory(mb)
Engraving(mb)
Insurance(mb)
// console.log(mb.cost())
// console.log(mb.screenSize())

/**
    Code copyright Dustin Diaz and Ross Harmes, Pro JavaScript Design Patterns.
**/

// Constructor.
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected exactly 2.");
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be " + "passed in as a string.");
        }
        this.methods.push(methods[i]);
    }
};


// Static class method.
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " + arguments.length + "arguments, but expected at least 2.");
    }
    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments" + "two and above to be instances of Interface.");
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object " + "does not implement the " + interface.name + " interface. Method " + method + " was not found.");
            }
        }
    }
};

var TodoList = new Interface('Composite', ['add', 'remove'])
var TodoItem = new Interface('TodoItem', ['save'])

var myTodoList = function (id, method, action) { }

function addTodo(todoInstance) {
    Interface.ensureImplements(todoInstance, TodoList, TodoItem)
}

var Macbook = new Interface('Macbook', ['addEngraving', 'addParallels', 'add4GBRam', 'add8GBRam', 'addCase']);
var MacbookPro = function () { }
MacbookPro.prototype = {
    addEngraving: function () { },
    addParallels: function () { },
    add4GBRam: function () { },
    add8GBRam: function () { },
    addCase: function () { },
    getPrice: function () {
        return 900.00
    }
}

var MacbookDecorator = function (macbook) {
    Interface.ensureImplements(macbook, Macbook);
    this.macbook = macbook;
}
MacbookDecorator.prototype = {
    addEngraving: function () {
        return this.macbook.addEngraving();
    },
    addParallels: function () {
        return this.macbook.addParallels();
    },
    add4GBRam: function () {
        return this.macbook.add4GBRam();
    },
    add8GBRam: function () {
        return this.macbook.add8GBRam();
    },
    addCase: function () {
        return this.macbook.addCase();
    },
    getPrice: function () {
        return this.macbook.getPrice();
    }
}

var CaseDecorator = function (macbook) {
    /*call the superclass's constructor next*/
    this.superclass.constructor(macbook);
}
extend(CaseDecorator, MacbookDecorator);

CaseDecorator.prototype.addCase = function () {
    return this.macbook.addCase() + " Adding case to macbook ";
};
CaseDecorator.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45.00;
};

var myMacbookPro = new MacbookPro();

console.log(myMacbookPro.getPrice());

myMacbookPro = new CaseDecorator(myMacbookPro);

console.log(myMacbookPro.getPrice());