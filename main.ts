let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    if (temperatura == 10) {
        basic.showNumber(temperatura)
        basic.showString("¡Vamos a esquiar!")
    } else if (temperatura == 20) {
        basic.showNumber(temperatura)
        basic.showString("¡Hagamos un picnic!")
    } else if (temperatura == 30) {
        basic.showNumber(temperatura)
        basic.showString("¡Vamos a la playa!")
    } else if (temperatura == 40) {
        basic.showNumber(temperatura)
        basic.showString("Mejor no salgas")
    } else {
        basic.showNumber(temperatura)
    }
})
