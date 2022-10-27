function average () {
    let FirstExam = document.getElementById("First Exam").value 
    let SecondExam = document.getElementById("Second Exam").value 
    let ThirdExam = document.getElementById("Third Exam").value 
    let mark1 = Number(FirstExam)
    let mark2 = Number(SecondExam)
    let mark3 = Number(ThirdExam)
    document.getElementById("average mark").innerHTML=Number(((mark1+mark2+mark3)/3).toFixed(2))
    let StudentName = document.getElementById("Student Name").value
    if (((mark1+mark2+mark3)/3)<5) {
        document.getElementById("comment").innerHTML = "Oh, dear! " + StudentName + " FAILED!"
        document.body.style.backgroundColor='orangered'
    } else {
        document.getElementById("comment").innerHTML = "YAY! " + StudentName + " PASSED!"
        document.body.style.backgroundColor='chartreuse'
    }
}