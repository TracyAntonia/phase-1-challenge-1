let marks = prompt('Enter marks: ')

function inputStudentMarks(){
    if (marks >= 80 && marks <= 100){
        alert("You scored an A!!!!")
    
    }else if (marks >= 70 && marks <= 79) {
        alert("You scored a B!!!")
    
    }else if (marks >= 60 && marks <= 69) {
        alert("You scored a C!!")

    }else if (marks >= 50 && marks <= 59) {
        alert("You scored a D!")

    }else if (marks <40 && marks >= 0) {
        alert("You scored a E.")

    }
}

inputStudentMarks()