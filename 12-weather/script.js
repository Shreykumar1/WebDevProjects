let apikey = "fe4281a5c75640f6a6397c4676b8feaa";
let city = "bangalore";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
)
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  console.log(data);
  console.table(data.main);
}

var y = document.getElementsByClassName("container")[0];
y.style.display = "none";

let picture = document.getElementsByClassName("picture")[0];
let temp = document.getElementsByClassName("temp")[0];
let location1 = document.getElementsByClassName("location")[0];
let description = document.getElementsByClassName("description")[0];
let feels__like = document.getElementsByClassName("feels_like")[0];
let humidity = document.getElementsByClassName("humidity")[0];
let back = document.getElementById("back");

document.getElementById("form").addEventListener("submit", (event) => {
  let cityName = document.getElementById("input").value;
  console.log(cityName);
  event.preventDefault();

  var x = document.getElementsByClassName("wrapper")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => showData(data));

  function showData(data) {
    console.log(data);
    console.table(data.main);
    if(data.cod === '404'){
      console.log("Hello");
    picture.innerHTML = `<img src="x.svg" id="Notfound">`;
    temp.textContent = `City Not Found`;

    feels__like.textContent = `-°C`;
    humidity.textContent = `-%`;
    location1.textContent = ``;
    description.textContent = ``;
    }else{
    temp.textContent = `${data.main.temp}°C`;
    feels__like.textContent = `${data.main.feels_like}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    location1.textContent = `${data.name}`;
    picture.innerHTML = ` <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Picture"> `;
    description.textContent = `${data.weather[0].description}`;
    }
  }
});

back.addEventListener("click", () => {
  var x = document.getElementsByClassName("wrapper")[0];
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
});
