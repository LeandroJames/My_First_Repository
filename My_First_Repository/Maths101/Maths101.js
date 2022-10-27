function myFunction() {
let no1 = document.getElementById("first number").value;
let no2 = document.getElementById("second number").value;
let integer1 = parseInt(no1)
let integer2 = parseInt(no2)
let add = integer1+integer2
let substraction = integer1-integer2
let multiplication = integer1*integer2
let division = integer1/integer2
document.write (
('<h2>Magic!</h2>') + ('<br/>') + 
"If you add your numbers, you get " + add + ('<br/>') + 
"If you substract your numbers, you get " + substraction + ('<br/>') + 
"If you multiply your numbers, you get " + multiplication + ('<br/>') + 
"If you divide your numbers, you get " + division)
}