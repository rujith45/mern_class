function play(userChoice) {
  const choices = ['Roooock', 'Paperrrr', 'Scissorssss'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw Buddy!";
  } else if (
    (userChoice === 'Rooock' && computerChoice === 'Scissorssss') ||
    (userChoice === 'Paperrrr' && computerChoice === 'Roooock') ||
    (userChoice === 'Scissorssss' && computerChoice === 'Paperrrr')
  ) {
    result = 'You win Buddy!';
  } else {
    result = 'Computer Jii wins!';
  }

  document.getElementById('result').textContent = result;
  document.getElementById('choices').textContent =
    `You chose: ${userChoice} | Computer chose: ${computerChoice}`;
}
