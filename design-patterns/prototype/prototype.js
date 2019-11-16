let someCar = {
    drive: function () {

    },
    name: "Mazda 3"
}
const MY_GLOBAL = {
    nextId: function () {
        var date = new Date();
        var components = [
            date.getYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        ];
        return id = components.join("");
    }
}
let anotherCar = Object.create(someCar)

var vehicle = {
    getModel: function () {
        console.log('The model of this vehicle is...' + this.model)
    }
}

var car = Object.create(vehicle, {
    'id': {
        value: MY_GLOBAL.nextId(),
        enumerable: true
    },
    'model': {
        value: 'Ford',
        enumerable: true
    }
})

// car.getModel()

// without Object.create

const noObjectCreate = (function () {
    let vehiclePrototype = {
        init(carModel) {
            this.model = carModel
        },
        getModel() {
            console.log('the model of the vehicle is: ' + this.model)
        }
    }

    function vehicle(model) {
        function F() { }
        F.prototype = vehiclePrototype
        let f = new F()
        f.init(model)
        return f
    }

    const newCar = vehicle('Ford Escort')
    newCar.getModel()
})
// noObjectCreate()

let beget = (() => {
    function F() { }
    return function (proto) {
        F.prototype = proto
        return new F()
    }
})()

let vehiclePrototype = {
    init(carModel) {
        this.model = carModel
        return this
    },
    getModel() {
        console.log('the model of the vehicle is: ' + this.model)
    }
}
beget(vehiclePrototype).init('f1').getModel()






