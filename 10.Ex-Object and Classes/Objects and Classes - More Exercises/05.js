function schoolRegister(input) {
    const register = {};

    for (let line of input) {
        let [_, name, grade, score] = line.match(/Student name: (.*), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/);
        grade = Number(grade);
        score = Number(score);

        if (score >= 3) {
            let nextGrade = grade + 1;
            if (!register[nextGrade]) {
                register[nextGrade] = [];
            }
            register[nextGrade].push({ name, score });
        }
    }

    let sortedGrades = Object.keys(register).sort((a, b) => a - b);

    for (let grade of sortedGrades) {
        let students = register[grade];
        let names = students.map(s => s.name).join(', ');
        let avgScore = students.reduce((sum, s) => sum + s.score, 0) / students.length;
        console.log(`${grade} Grade`);
        console.log(`List of students: ${names}`);
        console.log(`Average annual score from last year: ${avgScore.toFixed(2)}`);
        console.log();
    }
}

schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);