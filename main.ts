let Np = 0
basic.forever(function () {
    // En el buble si el boton A y B estan presionados asignamos a la variable NP cero y la mostramos. Se debe colocar esta condicion primero para no afectar los valores.
    while (input.buttonIsPressed(Button.AB)) {
        Np = 0
        basic.showNumber(Np)
    }
    // Si se presiona el noton B, a la variable NP le sumamos 1 y mostramos el valor
    while (input.buttonIsPressed(Button.B)) {
        Np += 1
        basic.showNumber(Np)
    }
    while (input.buttonIsPressed(Button.A)) {
        // Primero preguntamos si la variable NP es > cero, si se cumple la condicion le restamos 1 a la variable Np sino simplemente mostramos la variable NP
        if (Np > 0) {
            Np += -1
            basic.showNumber(Np)
        }
        basic.showNumber(Np)
    }
})
