// Function to fetch quiz questions from the Open Trivia Database API
async function fetchQuizQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching quiz questions:", error);
        return [];
    }
}

// Initialize the quiz
async function initializeQuiz() {
    const questions = await fetchQuizQuestions();
    let currentQuestion = 0;
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const resultText = document.getElementById("result");
    const nextButton = document.getElementById("next-button");

    function displayQuestion() {
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            questionText.textContent = question.question;
            optionsContainer.innerHTML = "";
            question.incorrect_answers.push(question.correct_answer);
            question.incorrect_answers.sort(() => Math.random() - 0.5);

            question.incorrect_answers.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("option");
                button.onclick = () => checkAnswer(index);
                optionsContainer.appendChild(button);
            });
            resultText.textContent = "";
            nextButton.disabled = true;
        } else {
            // Quiz completed
            questionText.textContent = "Quiz completed!";
            optionsContainer.innerHTML = "";
            resultText.textContent = "";
            nextButton.disabled = true;
        }
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestion].correct_answer;
        if (selectedOption === correctAnswer) {
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Incorrect. The correct answer is: " + questions[currentQuestion].correct_answer;
        }
        nextButton.disabled = false;
    }

    function nextQuestion() {
        currentQuestion++;
        displayQuestion();
    }

    displayQuestion();
}

initializeQuiz();
