// ============================================
// =========== Delete Prompt Modal ============
// ============================================

// OPEN MODAL
document.getElementById('prompt-button').addEventListener('click', (event) => {
  // https://stackoverflow.com/questions/55889300/my-javascript-output-flashes-for-a-second-and-then-disappears
  event.preventDefault();
  document.getElementById('delete-prompt').style.display = 'flex';
});
// CLOSE MODAL
document.getElementById('cancel-button').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('delete-prompt').style.display = 'none';
});



