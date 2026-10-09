// Access the note and close button elements
const note = document.querySelector('.note');
const closeNoteButton = document.querySelector('.closeNote');

// Add event listener to close the note when the close button is clicked
closeNoteButton.addEventListener('click', (e) => {
    e.preventDefault();
    note.style.display = 'none';
});