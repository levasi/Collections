(function () {
    let carManager = {
        requestInfo: (model, id) => {
            console.info('The information for ' + model + ' with id: ' + id + ' is foobar')
            return 'The information for ' + model + ' with id: ' + id + ' is foobar'
        },
        buyVehicle: (model, id) => {
            console.info('You have succesfully purchased vehicle' + id + 'a, ' + model)
            return 'You have succesfully purchased vehicle' + id + ' a, ' + model
        },

        arrangeViewing: (model, id) => {
            console.info('You have successfully booked a viewing of ' + model + ' ( ' + id + ' )')

            return 'You have successfully booked a viewing of ' + model + ' ( ' + id + ' )'
        }
    }

    carManager.execute = function (name) {
        return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1))
    }

    carManager.execute('arrangeViewing', 'Ferrary', '12345')
    carManager.execute('requestInfo', 'Ford Mondeo', '234567')
    carManager.execute('requestInfo', 'Ford Escort', '345678')
    carManager.execute('buyVehicle', 'Ford Escort', '456789')
})()