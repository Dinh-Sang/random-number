"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; //math.trunc: làm tròn số, Math.random: ra số ngẫu nhiên
let score = 20;
let highscore = 0;
// document.querySelector(".number").textContent = secretNumber; //check random number active

document.querySelector(".check").addEventListener("click", function () {
  //addEventListener: xử lý hành động
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess); //kiểm tra kiểu của guess

  //When there is no input
  if (!guess) {
    //check but don't have anything on button
    document.querySelector("message").textContent = "No number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".highscore").textContent = highscore;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //When gues is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lose this game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
