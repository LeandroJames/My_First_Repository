const punterAge=document.getElementById("punterAge").value
let age=Number(punterAge)
function sortByAge() {
    if (age<=5) {
        message="Preescolar"
    }
    else if (age>5 && age<=11) {
        message="Primària"
    }
    else if (age>11 && age<=15) {
        message="ESO"
    }
    else if (age>15 && age<=18) {
        message="Batxillerat"
    }
    else {
        message="FP o Universitat"
    }
    document.getElementById("message").innerHTML=message
}