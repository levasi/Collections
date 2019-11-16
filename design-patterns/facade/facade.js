let addEvent = function (el, ev, fn) {
    if (el.addEventListener(ev, fn, false)) {
        el.addEventListener(ev, fn, false)
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn)
    } else {
        el['on' + ev] = fn
    }
}

let myModule = (function () {
    var _private = {
        i: 5,
        get() {
            console.log('current value:' + this.i)
        },
        set(val) {
            this.i = val
        },
        run() {
            console.log('running')
        },
        jump() {
            console.log('jumping');
        }
    }
    const facade = {
        facadeMethod(args) {
            _private.set(args.val)
            _private.get()
            if (args.run) {
                _private.run()
            }
        }
    }
    return facade
})()

myModule.facadeMethod({
    run: true,
    val: 55
})