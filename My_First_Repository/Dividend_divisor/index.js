function retrieve() {
    dividend = document.getElementById("dividend").value
    divisor = document.getElementById("divisor").value
    dividendNumber = Number(dividend)
    divisorNumber = Number(divisor)
    return [dividendNumber, divisorNumber]
}

function isMultiple(message) {
    document.getElementById("answer").innerHTML = message
}

function checkParameters(){
    If (divisor<2 && divisor<7) {
        alert("Debes introducir un número entre el 2 y el 7")
    }
}

function calculate() {
    retrieve()
    checkParameters()
    let messageIsMultiple = dividend + " és un múltiple de " + divisor
    let messageIsNotMultiple = dividend + " no és un múltiple de " + divisor
    const result = dividendNumber / divisorNumber
    result == parseInt(result) ? isMultiple (messageIsMultiple) : isMultiple(messageIsNotMultiple)
}
