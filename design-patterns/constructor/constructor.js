// Basic constructors

function Car(model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles'
    }
}

let civic = new Car('Honda Civic', 2009, 2000)
let mondeo = new Car('Ford Mondeo', 2010, 5000)

// console.log(civic.toString())
// console.log(mondeo.toString())

// With props

function CarPrototype(model, year, miles) {
    this.model = model
    this.year = year
    this.miles = miles
}

CarPrototype.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles'
}

let prototypeCivic = new CarPrototype('Honda Civic', 2009, 2000)
let prototypeMondeo = new CarPrototype('Ford Mondeo', 2010, 5000)

console.log(prototypeCivic.toString())
console.log(prototypeMondeo.toString())