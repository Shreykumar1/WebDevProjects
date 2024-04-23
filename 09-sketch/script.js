let num = 2;
let n;
let click = 0;

document.getElementById("submit").addEventListener("click", function () {
  n = document.getElementById("text").value;
  num = n;
  console.log(num);
  console.log(n);
  click++;

  if (click != 1 && click != 0) {
    document.getElementById("wrapper").innerHTML = "";
  }
  function DIV() {
    var div = document.createElement("div");

    div.addEventListener("click", () => {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var col = "rgb(" + r + "," + g + "," + b + ")";

      div.style.background = col;
    });
    div.addEventListener("mousemove", () => {
      div.style.background = "black";
    });
    let width = 500 / num;
    let height = 500 / num;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.color = "white";
    console.log("Function Div", num);
    if (click == 1) {
      document.getElementById("wrapper").appendChild(div);
    }
    if (click != 1) {
      document.getElementById("wrapper").appendChild(div);
    }
  }
  for (let i = 0; i < num * num; i++) {
    DIV();
    console.log("DIV CALLING", num);
  }
});
console.log(num);

function myFunction(div) {}
