// Array of quiz questions and answers (minimum 5, using objects for structure)
const quizQuestions = [
  {
    question: "What is the capital of Japan?",
    answer: "tokyo"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "jupiter"
  },
  {
    question: "What is 10 multiplied by 5?",
    answer: "50"
  },
  {
    question: "Who invented the telephone?",
    answer: "alexander graham bell"
  },
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "What is the chemical symbol for water?", // Extra question for variety
    answer: "h2o"
  }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score to zero

  // Loop through each question using a for loop
  for (let i = 0; i < quizQuestions.length; i++) {
    // Prompt user for input
    let userAnswer = prompt(quizQuestions[i].question);

    // Normalize input: convert to lowercase and trim spaces
    userAnswer = userAnswer.toLowerCase().trim();

    // Check if the answer is correct (compare normalized versions)
    if (userAnswer === quizQuestions[i].answer.toLowerCase()) {
      score++; // Increment score if correct
      alert("Correct!"); // Immediate feedback
    } else {
      // Feedback with correct answer if wrong
      alert("Incorrect! The correct answer is: " + quizQuestions[i].answer);
    }
  }

  // Display final score
  alert("Quiz Over! Your final score is " + score + " out of " + quizQuestions.length);
}

// Run the quiz (call this in the browser console to start)
runQuiz();