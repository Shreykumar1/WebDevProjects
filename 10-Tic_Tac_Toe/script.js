let box = document.getElementsByClassName("box");
let container = document.getElementsByClassName("container")[0];
let playerChance = document.getElementsByClassName("chance")[0];
let main = document.getElementsByClassName("main")[0];
let reset = document.getElementsByClassName("reset")[0];
container.style.display = "none";
reset.style.display = "none";
let chance = 0;
let char = "X";
let res = [];
let result = 0;
let marked = 0;

res = ["", "", "", "", "", "", "", "", ""];

box = Array.from(box);
box.forEach((element, index, arr) => {

  element.addEventListener("click", () => {
    if (element.textContent === "") {
      marked++;

      if (chance % 2 == 0) {
        playerChance.textContent = "PLAYER 2 CHANCE";
        char = "X";
        element.textContent = char;
      } else {
        char = "O";
        playerChance.textContent = "PLAYER 1 CHANCE";
        element.textContent = char;
      }
      res[index] = element.textContent;
      chance++;


      for (let l = 1; l <= 2; l++) {
        let ch = "X";
        if (l === 2) {
          ch = "O";
        }
        //Horizontal Winning
        for (let i = 0, j = 1, k = 2; i <= 6; i = i + 3, j = j + 3, k = k + 3) {
          if (res[i] === ch && res[j] === ch && res[k] === ch) {
            let aloo = ch === "X" ? 1 : 2;
            result = 1;
            container.textContent = `PLAYER ${aloo} WON TIC  TAC  TOE GAME`;
          }
        }

        //Vertical Winning
        for (let i = 0, j = 3, k = 6; i <= 2; i = i + 1, j = j + 1, k = k + 1) {
          if (res[i] === ch && res[j] === ch && res[k] === ch) {
            let aloo = ch === "X" ? 1 : 2;
            result = 1;
            container.textContent = `PLAYER ${aloo} WON TIC  TAC  TOE GAME`;
          }
        }

        //Diagonal Winning
        if (res[0] === ch && res[4] === ch && res[8] === ch) {
          let aloo = ch === "X" ? 1 : 2;
          result = 1;
          container.textContent = `PLAYER ${aloo} WON TIC  TAC  TOE GAME`;
        }
        if (res[2] === ch && res[4] === ch && res[6] === ch) {
          let aloo = ch === "X" ? 1 : 2;
          result = 1;
          container.textContent = `PLAYER ${aloo} WON TIC  TAC  TOE GAME`;
        }
      }

      if (result === 1) {
        container.style.display = "block";
        reset.style.display = "block";
        main.style.filter = "blur(10px)";
      }
      if (marked === 9) {
        checkBoardFull();
      }
    }
  });
});

function checkBoardFull() {
  container.style.display = "block";
  reset.style.display = "block";
  container.textContent = `NO WINNER`;
  main.style.filter = "blur(10px)";
}

reset.addEventListener("click", shouldReset);

function shouldReset() {
  result = 0;
  res = [];
  chance = 0;
  container.style.display = "none";
  main.style.filter = "none";
  container.textContent = "";
  playerChance.textContent = "PLAYER 1 CHANCE";
  box.forEach((element) => {
    element.textContent = "";
  });
  reset.style.display = "none";
}

