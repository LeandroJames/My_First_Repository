function add() {
let no1=document.getElementById("no1").value
let no2=document.getElementById("no2").value
let n1=parseFloat(no1)
let n2=parseFloat(no2)
document.getElementById("Result").innerHTML=n1+n2
}

function substract() {
    let no1=document.getElementById("no1").value
    let no2=document.getElementById("no2").value
    let n1=parseFloat(no1)
    let n2=parseFloat(no2)
    document.getElementById("Result").innerHTML=n1-n2
    }
function multiply() {
    let no1=document.getElementById("no1").value
    let no2=document.getElementById("no2").value
    let n1=parseFloat(no1)
    let n2=parseFloat(no2)
    document.getElementById("Result").innerHTML=n1*n2
        }

function divide() {
    let no1=document.getElementById("no1").value
    let no2=document.getElementById("no2").value
    let n1=parseFloat(no1)
    let n2=parseFloat(no2)
    document.getElementById("Result").innerHTML=n1/n2
    }