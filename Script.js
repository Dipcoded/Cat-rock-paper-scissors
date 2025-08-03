let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0,
  tie: 0
};
 updateScore();
  function playGame(playerMove){
    const computerMove = getComputerMove();
    let result = '';
    if (playerMove ==='scissors'){
      if (computerMove === 'rock')
      {result = 'you lose';
      score.lose += 1;}
      else if (computerMove === 'paper') 
      {result = 'you win';
     score.wins += 1;}
      else {result = 'tie';
      score.tie += 1;}

  } else if (playerMove === 'paper'){
  if (computerMove === 'rock')
  {result = 'you win';
  score.wins +=1;}
  else if (computerMove === 'paper') 
  {result = 'tie';
  score.tie +=1;}
  else {result = 'you lose';
  score.lose +=1;}
  
  } else if (playerMove === 'rock'){
  if (computerMove === 'rock')
  {result = 'tie';
  score.tie +=1;}
  else if (computerMove === 'paper') 
  {result = 'you lose';
  score.lose +=1;}
  else {result = 'you win';
  score.wins +=1;}
  
  }
    localStorage.setItem('score', JSON.stringify(score));
  
  updateScore();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = 
  `<img class="icon" src="${playerMove}.jpg">  v/s  <img class="icon" src="${computerMove}.jpg">`;
   }
   
  function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins},
  lose: ${score.lose},tie: ${score.tie}`;
  }
  function getComputerMove() {
  let computerMove = '';
  const number = Math.random();
  
  
  if (number >=0 && number < 1/3){computerMove = 'rock';
    } else if (number >= 1/3 && number < 2/3){computerMove = 'paper';
    } else {computerMove = 'scissors';
      
    }
     return computerMove;  
}



