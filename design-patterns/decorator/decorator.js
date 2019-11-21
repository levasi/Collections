var Person = function (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = 'male'
}

var clark = new Person("Clark", "Kent")

var SuperHero = function (firstName, lastName, powers) {
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    Person.call(this, firstName, lastName)
    // Finally, store their powers, a new array of traits not found in a normal 'Person'
    this.powers = powers
}
SuperHero.prototype = Object.create(Person.prototype)
var superman = new SuperHero("Clark", "Kent", ['flight', 'heat-vision'])

// console.log(superman)

function vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car'
    this.model = 'default'
    this.license = '00000-000'
}

var testInstance = new vehicle('car')

// console.log(testInstance)

var truck = new vehicle('truck')

truck.setModel = function (modelName) {
    this.model = modelName
}

truck.setColor = function (color) {
    this.color = color
}

truck.setModel('CAT')
truck.setColor('blue')

// console.log(truck)

var secondInstance = new vehicle('car')

// console.log(secondInstance)

