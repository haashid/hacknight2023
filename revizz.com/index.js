// Define your quiz questions and answers
const questions = [
    {
        question: "1.Which is the largest animal on land?",
        options: ["Tiger", "White Elephant","African Elephant","Crocodile"],
        correctAnswer: 2 // Index of the correct option (0-based)
    },
    {
        question: "2.What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
    },
    {
        question:"3.What is the capital of India?",
        options:["Karnataka","Kerala","Goa","New Delhi"],
        correctAnswer: 3
    },
    {
        question:"4.Which is the biggest continent in the world?",
        options:["North America","Asia","Africa","Australia"],
        correctAnswer: 1
    },
    {
        question:"5.Which is the longest river in the world?",
        options:["Great Ganga","Nile","Amazon","Niger"],
        correctAnswer: 1
    },
    {
        question:"6.Which is the largest ocean in this world?",
        options:["Indian Ocean","Pacific Ocean","Arctic Ocean","Atlantic Ocean"],
        correctAnswer: 2
    },
    {
        question:"7.Which is the first super computer?",
        options:["Param8000","Param80000","Param800","Param8"],
        correctAnswer: 0
    },
    {
        question:"8.Which bank is called Bankers Bank of India?",
        options:["Reserve Bank of India","Punjab National Bank","State Bank of India","ICICI Bank"],
        correctAnswer: 0
    },
    {
        question:"9.Which is the largest animal in the world?",
        options:["Shark","blue whale","Elephant","Giraffe"],
        correctAnswer: 1
    },
    {
        question:"10.Which is the largest island in the world?",
        options:["New Guinea","Andaman Nicobar","Hawaii","Greenland"],
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
