let myRevealingModule = (function () {
    let name = 'John Doe'
    let age = 5

    function updatePerson() {
        name = 'John Doe updated'
    }
    function setPerson() {
        name = 'John Doe set'
    }
    function getPerson() {
        const returnValue = `name: ${name}, \n age: ${age}`
        return returnValue
    }
    return {
        set: setPerson,
        get: getPerson
    }
}())

// Sample usage
console.log(myRevealingModule.get());
