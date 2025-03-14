// 1. Define the Quiz Data:
//Create a list of countries and their capitals and Store this data in a variable called quizdata.

const quizData = [
    { country: 'Egypt', capital: 'Cairo' },
    { country: 'Albania', capital: 'Tirana' },
    { country: 'Belarus', capital: 'Minsk' },
    { country: 'Bulgaria', capital: 'Sofia' },
    { country: 'Croatia', capital: 'Zagreb' },
    { country: 'Czech Republic', capital: 'Prague' },
    { country: 'Estonia', capital: 'Tallinn' },
    { country: 'Hungary', capital: 'Budapest' },
    { country: 'Lithuania', capital: 'Vilnius' },
    { country: 'Moldova', capital: 'Chisinau' },
    { country: 'Montenegro', capital: 'Podgorica' },
    { country: 'Poland', capital: 'Warsaw' },
    { country: 'Romania', capital: 'Bucharest' },
    { country: 'Serbia', capital: 'Belgrade' },
    { country: 'Ukraine', capital: 'Kyiv' },
    { country: 'Bahamas', capital: 'Nassau' },
    { country: 'Barbados', capital: 'Bridgetown' },
    { country: 'Cuba', capital: 'Havana' },
    { country: 'Dominica', capital: 'Roseau' },
    { country: 'Grenada', capital: "St. George's" },
    { country: 'Haiti', capital: 'Port-au-Prince' },
    { country: 'Jamaica', capital: 'Kingston' },
    { country: 'Trinidad and Tobago', capital: 'Port of Spain' },
    { country: 'Belize', capital: 'Belmopan' }, 
    { country: 'Guyana', capital: 'Georgetown' }, 
    { country: 'Suriname', capital: 'Paramaribo' },
    { country: 'Uganda', capital: 'Kampala'},
    { country: 'Australia', capital: 'Canberra'},
    { country: 'Tanzania', capital: 'Dar-Es-Salaam'},
    { country: 'Dominican Republic', capital: 'Santo Domingo'},
    { country: 'United States', capital: 'Washington, D.C' },
    { country: 'Morocco', capital: 'Rabat' },
    { country: 'China', capital: 'Beijing' },
    { country: 'Kenya', capital: 'Nairobi' },
    { country: 'Russia', capital: 'Moscow' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'Thailand', capital: 'Bangkok' },
    { country: 'Spain', capital: 'Madrid' },
    { country: 'Japan', capital: 'Tokyo' },
    { country: 'Brazil', capital: 'Brasilia' },
    { country: 'Argentina', capital: 'Buenos Aires' },
    { country: 'Nigeria', capital: 'Abuja' },
    { country: 'Britain', capital: 'London' },
    { country: 'Mexico', capital: 'Mexico City' },
];

// 2. Initialize Game Variables

let currentQuestionIndex = 0;
let score = 0;
let consecutiveCorrectAnswers = 0; // tracking consecutive correct answers
let incorrectAnswers = 0; // track incorrect answers

//3 create a fuunctionn to Display Question
//Get the current question from my array using currentQuestionIndex

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `What is the capital of ${quizData[currentQuestionIndex].country}?`;
}
//4. Function: Check Answer
//get the player's answer from the input field.
//compare the player's answer with the correct answer from `quizData`.
//if the answer is correct display "Correct!!".
// increase the score by 1.
// increasing consecutiveCorrectAnswers by 1.
// reseting incorrectAnswers to 0.
//If the answer is incorrect:
//display the correct answer
//reset consecutiveCorrectAnswers to 0.
//update the score display on the screen.
function checkAnswer() {
    const playerAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = quizData[currentQuestionIndex].capital;
    const feedbackElement = document.getElementById('feedback');

    if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackElement.textContent = 'CORRECT!!';
        feedbackElement.style.color ='green';
        score++;
        consecutiveCorrectAnswers++; // increment by one of consecutive correct answers.
        incorrectAnswers = 0; // resetting incorrect answers 
    } else { 
        feedbackElement.textContent = `INCORRECT! The correct answer is ${correctAnswer}.`;
        feedbackElement.style.color = 'red';
        incorrectAnswers++; // Increment incorrect answers counter
        consecutiveCorrectAnswers = 0; // Reset consecutive correct answers
    }
//5. checking for the gaame end Conditions
//If incorrectAnswers reaches 20, end the game and display "You have been disqualified for failing 20 questions"
//If consecutiveCorrectAnswers reaches 35, end the game and display "You answered 35 questions correctly! you have won the game"
//If all questions are answered end the game and display the final score.

    // updating the score display
    document.getElementById('score').textContent = `Score: ${score}`;

    // checking for disqualification (20 incorrect answers)
    if (incorrectAnswers >= 20) {
        endGame('disqualified');
        return; // stopping further execution
    }

    //checking for a win (35 consecutive correct answers)
    if (consecutiveCorrectAnswers >= 35) {
        endGame('win');
        return; 
    }

//6. Move to the Next Question by increasing "currentQuestionIndex"
//iff there are more questions, display the next question.
//if no more questions are left, end the game.

    // Moving to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        endGame('completed');
    }

    // clearing the input field
    document.getElementById('answer').value = '';
}

//7. creating a function to end the game()
//Display the game over message based on the game status (disqualified, win, or completed).
//Hide the input field and submit button.
//Show the restart button.
function endGame(status) {
    const questionElement = document.getElementById('question');
    const feedbackElement = document.getElementById('feedback');

    if (status === 'disqualified') {
        questionElement.textContent = 'Game Over!!';
        feedbackElement.textContent = 'you are disqualified!! you failed 20 questions.';
    } else if (status === 'win') {
        questionElement.textContent = 'congratulations!';
        feedbackElement.textContent = 'you answered 35 questions correctly! you won the game!';
    } else if (status === 'completed') {
        questionElement.textContent = 'Game Over!';
        feedbackElement.textContent = `Your final score is ${score} out of ${quizData.length}.`;
    }

    // Hiding input and submit button
    document.getElementById('answer').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Showing restart button
    document.getElementById('restart-btn').style.display = 'inline';
}

//8. creating a  gfunction to restart the game restartGame
//reset all game variables 
//Show the input field and submit button.
//Hide the restart button.
//Display the first question.
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    consecutiveCorrectAnswers = 0;
    incorrectAnswers = 0;
    document.getElementById('answer').style.display = 'inline';
    document.querySelector('button').style.display = 'inline';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').textContent = 'Score: 0';
    displayQuestion();
}

//9. Starting the game by displaying the first question when the page loads.

displayQuestion();