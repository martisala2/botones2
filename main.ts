basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) < 20) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
    } else if (pins.analogReadPin(AnalogPin.P1) > 30 && pins.analogReadPin(AnalogPin.P1) < 70) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(1000)
    } else if (pins.analogReadPin(AnalogPin.P1) > 70 && pins.analogReadPin(AnalogPin.P1) < 110) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    } else if (pins.analogReadPin(AnalogPin.P1) > 110 && pins.analogReadPin(AnalogPin.P1) < 150) {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    } else if (pins.analogReadPin(AnalogPin.P1) > 150 && pins.analogReadPin(AnalogPin.P1) < 600) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
})
