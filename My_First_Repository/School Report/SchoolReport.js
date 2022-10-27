function myFunction (){
let Mark1=document.getElementById("First Exam").value
let Mark2=document.getElementById("Second Exam").value
let Mark3=document.getElementById("Third Exam").value
let n1 = parseFloat(Mark1)
let n2 = parseFloat(Mark2)
let n3 = parseFloat(Mark3)
document.getElementById("average mark").innerHTML = (n1 + n2 + n3) / 3
}