// JavaScript for flashcard functionality
const flashcardContainer = document.querySelector('.flashcard-container');
const addCardButton = document.getElementById('add-card-button');

addCardButton.addEventListener('click', addFlashcard);

function addFlashcard() {
    const newFlashcard = document.createElement('div');
    newFlashcard.classList.add('flashcard');

    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.classList.add('question');
    questionInput.placeholder = 'Enter question';

    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add';

    const questionDisplay = document.createElement('div');
    questionDisplay.classList.add('question-display', 'hidden');

    const answer = document.createElement('div');
    answer.classList.add('answer', 'hidden');

    addButton.addEventListener('click', () => {
        if (questionInput.value !== '') {
            questionDisplay.textContent = questionInput.value;
            questionInput.classList.add('hidden');
            addButton.classList.add('hidden');
            questionDisplay.classList.remove('hidden');
            answer.classList.remove('hidden');
        }
    });
 
    newFlashcard.appendChild(questionInput);
    newFlashcard.appendChild(addButton);
    newFlashcard.appendChild(questionDisplay);
    newFlashcard.appendChild(answer);
    flashcardContainer.appendChild(newFlashcard);
}
