// Define your quiz questions and answers
const questions = [
    {
        question: "1.What is the result of 2 + 2?",
        options: ["2","3","4","5"],
        correctAnswer: 2 // Index of the correct option (0-based)
    },
    {
        question: "2.How many sides does a triangle have?",
        options: ["5","6","3","4"],
        correctAnswer: 2
    },
    {
        question:"3.What is the value of π (pi) approximately equal to?",
        options:["2.17","2.91","1.62","3.14"],
        correctAnswer: 3
    },
    {
        question:"4.If you have 3 apples and you eat 1, how many apples do you have left?",
        options:["3","2","1","0"],
        correctAnswer: 1
    },
    {
        question:"5.What is the square of 5?",
        options:["10","25","15","30"],
        correctAnswer: 1
    },
    {
        question:"6.What is the result of 8 multiplied by 7?",
        options:["15","27","56","36"],
        correctAnswer: 2
    },
    {
        question:"7.How many degrees are in a right angle?",
        options:["90","45","135","180"],
        correctAnswer: 0
    },
    {
        question:"8.If a rectangle has a length of 10 units and a width of 5 units, what is its area?",
        options:["25 square units","15 square units","20 square units","10 square units"],
        correctAnswer: 0
    },
    {
        question:"9.What is the next prime number after 19??",
        options:["22","23","24","25"],
        correctAnswer: 1
    },
    {
        question:"10.If x = 3 and y = 4, what is the value of x² + y²?",
        options:["18","19","21","25"],
        correctAnswer: 3
    },

];

let currentQuestion = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    questionText.innerText = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "option";
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
// JavaScript
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
        score++;
        document.querySelectorAll(".option")[selectedOption].classList.add("correct");
    } else {
        document.querySelectorAll(".option")[selectedOption].classList.add("incorrect");
        document.querySelectorAll(".option")[correctAnswer].classList.add("correct");
    }

    // Disable all options to prevent further selection
    document.querySelectorAll(".option").forEach(button => (button.disabled = true));
    document.getElementById("next-button").disabled = false;
}




// Function to move to the next question
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        document.getElementById("result").innerText = "";
        document.querySelectorAll(".option").forEach(button => (button.disabled = false));
        document.getElementById("next-button").disabled = true;
    } else {
        // Quiz is finished
        alert(`Quiz completed. Your score is ${score} out of ${questions.length}`);
    }
}
let time = 60; // 60 seconds
        const timerElement = document.getElementById("timer");
        const messageElement = document.getElementById("message");

        function countdown() {
            timerElement.textContent = time;
            if (time > 0) {
                time--;
                setTimeout(countdown, 1000); // Update every second
            } else {
                messageElement.textContent = "Time's Up!";
            }
        }

        countdown(); 

// Start the quiz by displaying the first question
displayQuestion();
document.getElementById("next-button").disabled = true;
