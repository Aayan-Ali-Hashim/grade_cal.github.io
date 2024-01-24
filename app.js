function saveMarks(){
    var sciencemarks = document.getElementById('science').value;
    if (sciencemarks<=100){
        Total = parseInt(sciencemarks);
    }
    else{
        window.alert("Please enter correct Science marks");
    }

    var mathmarks = document.getElementById('maths').value;
    if (mathmarks<=100){
        Total = Total + parseInt(mathmarks);
    }
    else{
        window.alert("Please enter correct Math marks");
    }
    var computermarks = document.getElementById('computer').value;
    if (computermarks<=100){
        Total = Total + parseInt(computermarks);
    }
    else{
        window.alert("Please enter correct Computer marks ");
    }
    percentage = Math.round(Total/300 * 100);
    if (percentage>0){
    document.querySelector("#percentage").innerHTML = "Your percentage:"+""+percentage+"%";
    }
    else if(percentage>100){
        document.querySelector("#percentage").innerHTML = "Your percentage:"+" "+"-";
    }
    else{
        document.querySelector("#percentage").innerHTML = "Your percentage:"+" "+"-";
    }
    if(percentage>=90){
        document.querySelector("#grade").innerHTML = "Your grade:" + " "+ "A+";
    }
    else if(percentage>=80){
        document.querySelector("#grade").innerHTML = "Your grade:" + " " + "A";
    }
    else if(percentage>=70){
        document.querySelector("#grade").innerHTML = "Your grade:" + " " + "B";
    }
    else if(percentage<70){
        document.querySelector("#grade").innerHTML = "Your grade:" + " " + "Better Luck next time";
    }
    else{
        document.querySelector("#grade").innerHTML = "Your grade:"+" "+ "-";
    }
}