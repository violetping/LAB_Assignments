# Web Dev I Lab Assignment 4 - Prompt Quiz: A Quiz Game



**Student Name:** Gaurav Kumar  

**Roll No:** 2501660010  

**Course:** BCA-CS  

# OUTPUT

1. Paste the code from quiz.js to consol.

[](./images/paste2consol.png)

2. Give a reponse to the question. 

3. Output for a correct response.

4. Output for an incorrect response.


5. Final score.



## Project Description

A simple JavaScript quiz game that runs entirely in the browser console. It uses an array of questions, loops through them with a for loop, prompts for user input, normalizes answers with `toLowerCase()` and `trim()`, provides immediate feedback via `alert()`, tracks the score, and displays the final result. No HTML or DOM manipulation is used.



## Features Implemented

- Array of 6 questions (exceeds minimum of 5) stored as objects with `question` and `answer` properties.

- `runQuiz()` function to encapsulate all logic.

- For loop to iterate through questions.

- Input handling with normalization for case-insensitivity and extra spaces.

- Conditional checks (if-else) for answer validation.

- Immediate alert feedback for correct/incorrect answers.

- Score tracking and final alert display.



## How to Run and Test

1. Open a web browser (e.g., Chrome).

2. Press F12 (or right-click > Inspect) to open Developer Tools.

3. Go to the "Console" tab.

4. Copy and paste the entire contents of `quiz.js` into the console.

5. Press Enter – the quiz will start automatically with prompts.

6. Answer each prompt (e.g., type "tokyo" for the first question) and confirm alerts show feedback.

7. At the end, an alert will show your score (e.g., "5 out of 6").

8. Test with different inputs: Try uppercase, extra spaces, or wrong answers to verify normalization and feedback.



**Note:** This is console-based, so no web page is needed. Ensure at least 5 questions work with correct score display.



**Submitted for Lab Assignment 4 - JavaScript Basics**
