// Define your quiz questions and answers
const questions = [
    {
        question: "1.What is the chemical symbol for gold?",
        options: ["Ge","Ag","Au","Cu"],
        correctAnswer: 2 // Index of the correct option (0-based)
    },
    {
        question: "2.Who is known as the father of modern physics?Who is known as the father of modern physics??",
        options: ["Isaac Newton","Galileo Galilei","Albert Einstein"," Stephen Hawking"],
        correctAnswer: 2
    },
    {
        question:"3.What is the chemical symbol for oxygen?",
        options:["Ox","Oy","Oz","O"],
        correctAnswer: 3
    },
    {
        question:"4.Which gas do plants absorb from the atmosphere during photosynthesis?",
        options:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"],
        correctAnswer: 1
    },
    {
        question:"5.What is the largest planet in our solar system?",
        options:["Earth","Jupiter","Venus","Mars"],
        correctAnswer: 1
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
