let celsius = 0
let fahrenheit = 0
basic.forever(function () {
    celsius = input.temperature()
    fahrenheit = celsius * 1.8 + 32
    if (celsius >= -22 && celsius <= 14) {
        basic.showString("Stay ay home, there is heavy snow.")
        basic.showIcon(IconNames.No)
    } else if (celsius >= 15 && celsius <= 23) {
        basic.showString("Go for your skis and have fun!")
        basic.showIcon(IconNames.Yes)
    } else if (celsius >= 24 && celsius <= 32) {
        basic.showString("Warning! You can only ski in the highest parts.")
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (celsius >= 33) {
        basic.showString("Sorry, it is not ski season.")
        basic.showIcon(IconNames.Sad)
    }
})
