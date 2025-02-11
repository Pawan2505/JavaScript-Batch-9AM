function calculateGrade() {
    const score = parseInt(document.getElementById('score').value);
    let grade;

    if (isNaN(score) || score < 0 || score > 100) {
        grade = 'Invalid score. Please enter a number between 0 and 100.';
    } else if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Grade: ${grade}`;
}
