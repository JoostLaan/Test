input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0 + randint(0, 10))
})
basic.showString("Yo")
basic.forever(function () {
    while (true) {
    	
    }
})
