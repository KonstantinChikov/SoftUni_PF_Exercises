// Ex. I

function formatGrade(grade) {

    let result = "";

    if(grade <= 3.00){
        grade = 2;
        result = "Fail";
    }else if(grade > 3 && grade < 3.50){
        result = "Poor";
    }else if(grade >= 3.50 && grade < 4.50){
        result = "Good";
    }else if(grade >= 4.50 && grade < 5.50){
        result = "Very good";
    }else if(grade >= 5.50){
        result = "Excellent";
    }

    console.log(`${result} (${grade.toFixed(2)})`);
}

formatGrade(3.33)