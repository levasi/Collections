//Creating Objects

let newObject = {}

let newObject2 = Object.create(null)

let newObject3 = new Object()

// Asigning properties

// 1. Dot syntax
newObject.someKey = 'Hello world'
var key1 = newObject.somaKey

// 2. Square bracket syntax
newObject['someKey'] = 'Hello world'
let key2 = newObject2.someKey

// Object.definePrperty
Object.defineProperty(newObject3, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
})

// Second version



defineEmptyObject = Object.create(null)

Object.defineProperties(defineEmptyObject, {
    'name': {
        value: 'John',
        writable: true
    },
    'adress': {
        value: 'Street',
        writable: false
    }
})


let defineProperty = function (obj, key, value) {
    let config = {}
    config.value = value
    Object.defineProperty(obj, key, config)
}

let man = Object.create(null)

defineProperty(man, 'car', 'F1')
defineProperty(man, 'name', 'Deloram')
defineProperty(man, 'beard', true)

let driver = Object.create(man)
defineProperty(driver, 'topSpeed', '111km/h')
console.log(driver.topSpeed)