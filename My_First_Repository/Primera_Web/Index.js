let name = prompt("What is your name?")
let surname = prompt("What is your surname?")
let age = prompt("How old are you?")

let message1 = "Hi, " + name + " " + surname + ". You are underage"
let message2 = "Hi, " + name + " " + surname + ". You are overage"

if (age<18) {
    document.getElementById("message").innerHTML = message1
    document.body.style.backgroundColor='aquamarine'
} else {
    document.getElementById("message").innerHTML = message2
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
}