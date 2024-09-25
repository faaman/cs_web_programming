function getAverage(scores) {

    /*
    // code 1 works: 
    let num_scores = scores.length;
    let tot_scores = 0;
    for (let i = 0; i < num_scores; i++) {
      tot_scores = tot_scores + scores[i];
    }
    return tot_scores / num_scores;*/

    // code 2 also works: 
    let sum = 0;
    for (const score of scores) {
      sum += score;
    }
    return sum / scores.length;
  }

  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

  function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }

  function studentMsg(totalScores, studentScore) {
    let class_avg = getAverage(totalScores);
    let student_grade = getGrade(studentScore);
    let student_passed = hasPassingGrade(studentScore);

    if (student_passed){
        return "Class average: " + class_avg + ". Your grade: " + student_grade + ". You passed the course.";
    } else {
        return "Class average: " + class_avg + ". Your grade: " + student_grade + ". You failed the course.";
    }
  }

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));