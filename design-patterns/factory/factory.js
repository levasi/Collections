function VehicleFactory() { }


/*
    FIXME:
    Car bellow is not defined
    Search for other implementations too
*/

VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.getVehicle = function (options) {
    return new this.vehicleClass(options);
};

var carFactory = new VehicleFactory();

var car = carFactory.getVehicle({
    color: "yellow",
    turbo: true
});

console.log(car instanceof Car);
carFactory.vehicleClass = Truck;

var mover = carFactory.getVehicle({
    enclosedCargo: true,
    length: 26
});
console.log(mover instanceof Truck);
function TruckFactory() { }

TruckFactory.prototype = newVehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;

var truckFactory = new TruckFactory();

var bigfoot = truckFactory.getVehicle({
    monster: true,
    cylinders: 12
});

console.log(bigfoot instanceof Truck);

var AbstractVehicleFactory = (function () {
    var types = {};
    return {
        getVehicle: function (type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        },
        registerVehicle: function (type, Vehicle) {
            var proto = Vehicle.prototype;
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    };
})()

AbstractVehicleFactory.registerVehicle("car", Car)
AbstractVehicleFactory.registerVehicle("truck", Truck)

var car = AbstractVehicleFactory.getVehicle("car", {
    color: "yellow",
    turbo: true
});
var truck = AbstractVehicleFactory.getVehicle("truck", { monster: true, cylinders: 12 })
