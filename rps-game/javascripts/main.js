var rock = document.getElementById("rock"),
      paper = document.getElementById("paper"),
      scissors = document.getElementById("scissors"),
      cpuScore = document.getElementById("cpuScore"),
      userScore = document.getElementById("userScore"),
      play = document.getElementById("play"),
      reset = document.getElementById("reset"),
      userDisplay = document.getElementById("userDisplay"),
      cpuDisplay = document.getElementById("cpuDisplay"),
      userScore = 0,
      winningScore = 5,
      cpuScore = 0,
      user = "";

//computer choice
function computerChoice(){
  var options = ["rock", "paper", "scissors"];
  var randomNum =  Math.floor(Math.random()*3);
  return options[randomNum];
};


//userChoice on click display text choice
rock.addEventListener("click", function(){
  user = "rock";
});
paper.addEventListener("click", function(){
  user = "paper";
});
scissors.addEventListener("click", function(){
  user = "scissors";
});
play.addEventListener("click", function(){
  // on click compare user to computerChoice
alert(checkForWinner(computerChoice(), user));
userDisplay.textContent = userScore;
cpuDisplay.textContent = cpuScore;
user = "";

if(userScore === winningScore){
  userDisplay.textContent = userScore;
  cpuDisplay.textContent = cpuScore;
  alert("Congrats, you win!");
  userScore = 0;
  cpuScore = 0;
}
if(cpuScore === winningScore){
  userDisplay.textContent = userScore;
  cpuDisplay.textContent = cpuScore;
  alert("Better luck next time.");
  userScore = 0;
  cpuScore = 0;
}
});
reset.addEventListener("click", function() {
  userScore = 0;
  cpuScore = 0;
  userDisplay.textContent = userScore;
  cpuDisplay.textContent = cpuScore;
});

//compare computerChoice and userChoice and check for checkWinner
function checkForWinner(computerChoice, user){
  if(computerChoice === user){
    return "Computer picked " + computerChoice + ",  it's a tie";
  }
  if(computerChoice === "rock" && user === "paper"){
    userScore ++;
    return "Computer picked " + computerChoice + ", you win!";
  }
  if(computerChoice === "rock" && user === "scissors"){
    cpuScore ++;
    return "Computer picked " + computerChoice + ", you lose!";
  }
  if(computerChoice === "paper" && user === "rock"){
    cpuScore ++;
    return "Computer picked " + computerChoice + ", you lose!";
  }
  if(computerChoice === "paper" & user === "scissors"){
    userScore ++;
    return "Computer picked " + computerChoice + ", you win!";
  }
  if(computerChoice === "scissors" && user === "rock") {
    userScore ++;
    return "Computer picked " + computerChoice + ", you win!";
  }
  if(computerChoice === "scissors" && user === "paper"){
    cpuScore ++;
    return "Computer picked " + computerChoice + ", you lose";
  }
};
