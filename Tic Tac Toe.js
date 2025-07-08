let heading = document.querySelector("#heading");
let btn = document.querySelector(".start");
let inner = document.querySelector(".inner-text");
let subInnerText = document.querySelector(".sub-innertext");
let msg = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");

let turnO = true;

subInnerText.style.display = "none";

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

btn.addEventListener("click", () => {
  inner.style.display = "none";
  subInnerText.style.display = "block";
});

const resetGame = () => {
  turnO = true;
  enabledBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    msg.innerHTML = "";
  }
};

const checkWinner = () => {
  const winnerFound = false;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msg.innerText = `Congrulation winner is ${pos1Val}`;
        disabledBoxes();
      }
    }
  }

  let allFilled = [...boxes].every((box) => box.innerText != "");
  if (allFilled && !winnerFound) {
    msg.innerText = "It's a Draw. Play again";
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
