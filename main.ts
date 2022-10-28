let ready = false
input.onPinPressed(TouchPin.P0, function () {
    ready = false
    basic.showIcon(IconNames.Heart)
    basic.pause(randint(2000, 7000))
    basic.clearScreen()
    ready = true
})
input.onPinPressed(TouchPin.P2, function () {
    if (ready) {
        ready = false
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
    } else {
        ready = false
        basic.showString("False")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (ready) {
        ready = false
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        ready = false
        basic.showString("1 False Start")
    }
})
