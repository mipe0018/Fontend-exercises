  const randomNumber = Math.floor(Math.random() * 101);
  const guessInput = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');
  const feedback = document.getElementById('feedback');

  guessBtn.addEventListener('click', () => {
    const guess = parseInt(guessInput.value, 10);
    if (isNaN(guess) || guess < 0 || guess > 100) {
      feedback.textContent = 'Indtast venligst et tal mellem 0 og 100.';
      feedback.className = 'feedback';
      return;
    }
    if (guess > randomNumber) {
      feedback.textContent = 'Tallet er for højt! Prøv igen.';
      feedback.className = 'feedback too-high';
    } else if (guess < randomNumber) {
      feedback.textContent = 'Tallet er for lavt! Prøv igen.';
      feedback.className = 'feedback too-low';
    } else {
      feedback.textContent = `Tillykke! Du gættede tallet ${randomNumber}!`;
      feedback.className = 'feedback correct';
      createConfetti();
      guessBtn.disabled = true;
      guessInput.disabled = true;
    }
    guessInput.value = '';
    guessInput.focus();
  });
  // Enable pressing Enter to guess
  guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      guessBtn.click();
    }
  });