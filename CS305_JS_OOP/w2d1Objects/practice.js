
/* ➢ Create 3 objects, student1, student2, student3
➢ property studentId : s101, s102, s103 respectively
➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
➢push the students into an array, quiz
➢ write a function, gradeQuiz, that takes the quiz array and an array of correct answers, e.g.,
[3,1,2,4] and returns an array that has scores for each student. Their score is the number of
correct answers.
➢ expect [ 3, 2, 3 ]
➢ use a helper function to compute the score for a given student */


let student1 = {
    studentId:"s101",
    quizAnswers: [1, 1, 2, 4]
};


let student2 = {
    studentId: "s102",
    quizAnswers:[2, 1, 2,2]
};


let student3 = {
    studentId: "s103",
    quizAnswers: [3, 1, 3,4]
};

let quiz = [student1, student2, student3];
const correctAnswers = [3, 1, 2, 4];

// Define the gradeQuiz function
function gradeQuiz(quizArray, correctAnswers) {
    const scores = [];
    
    function computeScore(studentAnswers, correctAnswers) {
      let score = 0;
      for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correctAnswers[i]) {
          score++;
        }
      }
      return score;
    }
    
    for (const student of quizArray) {
      const score = computeScore(student.quizAnswers, correctAnswers);
      scores.push(score);
    }
    
    return scores;
  }
  
  // Call the gradeQuiz function with the quiz array and correct answers
  
  const scores = gradeQuiz(quiz, correctAnswers);
  
  console.log(scores); // Output: [3, 2, 3]