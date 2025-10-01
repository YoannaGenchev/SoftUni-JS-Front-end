function formatGrade(grade) {
    let description;
    let formattedGrade;
    
    if (grade < 3.00) {
        description = "Fail";
        formattedGrade = Math.floor(grade);
    } else if (grade >= 3.00 && grade < 3.50) {
        description = "Poor";
        formattedGrade = grade.toFixed(2);
    } else if (grade >= 3.50 && grade < 4.50) {
        description = "Good";
        formattedGrade = grade.toFixed(2);
    } else if (grade >= 4.50 && grade < 5.50) {
        description = "Very good";
        formattedGrade = grade.toFixed(2);
    } else { 
        description = "Excellent";
        formattedGrade = grade.toFixed(2);
    }
    
    console.log(`${description} (${formattedGrade})`);
}
