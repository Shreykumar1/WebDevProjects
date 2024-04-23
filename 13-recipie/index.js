// get all html elements into dom

var recipie = document.querySelector("#EnterRecipies");
var searchResult = document.querySelector(".searchResult");
var submit = document.querySelector("#submitInput");
var Outputrecipies = document.querySelector(".Outputrecipies");
var mealTypeHome = document.querySelectorAll(".mealTypeHome");
var checkbox = document.querySelectorAll(".checkbox");
var dietSection = document.querySelector(".diet-section");
var loader = document.querySelector(".loader");
var form = document.querySelector("form");
let Filterrecipies = document.querySelector("#Filterrecipies");
let recipePage = document.querySelector("#recipePage");
let homePage = document.querySelector("#homePage");
let homeRecipie = document.querySelector("#homeRecipie");
var Foodcard = document.querySelectorAll(".Foodcard");
// var submitRecipie = document.querySelector('#submitInputRecipies');
let navRecipie = document.querySelector("#navRecipie");
let navHome = document.querySelector("#navHome");

const app_id = "24daaec0";
const app_key = "8f273ff45853c56b49f78d2fbb060d04";
mealType = Array.from(mealType);
checkbox = Array.from(checkbox);
console.log(checkbox);

// Set Home and Recipie Page from Navbar
function setPage(e) {
  console.log(e.target.innerHTML);
  if (e.target.innerHTML === "Home") {
    navHome.classList.add("active");
    navRecipie.classList.remove("active");

    homePage.style.display = "block";
    recipePage.style.display = "none";
  } else {
    navRecipie.classList.add("active");
    navHome.classList.remove("active");
    homePage.style.display = "none";
    recipePage.style.display = "flex";
  }
}

window.onload = () => {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchApi();
  });
  submitHome.addEventListener("click", (e) => {
    e.preventDefault();
    handleHome();
  });
  recipePage.style.display = "none";
  for (var i = 0; i < mealTypeHome.length; i++) {
    mealTypeHome[i].addEventListener("click", showComment, false);
  }
  mealTypeHome[0].click();
};

async function showComment(e) {
  let meal = e.target.id;
  const axz = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&mealType=${meal}`;
  const response = await fetch(axz);
  const data = await response.json();
  console.log(data);
  homePageHtml(data.hits);
}
// Function to Recommened result using AI based on filter
function showSelection(e) {
  let diet = "";
  for (var i = 0; i < checkbox.length; i++) {
    let type = checkbox[i].parentNode.parentNode.id;
    if (checkbox[i].checked === true) {
      diet = diet + `&${type}=${checkbox[i].id}`;
    }
  }
  console.log(diet);
  var searchValue = recipie.value;
  console.log(searchValue);
  if (searchValue === "") {
    Outputrecipies.innerHTML = "<h1>Search Input cannot be empty<h1>";
  } else {
    const axz = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}&q=${searchValue}${diet}`;
    fetchTemplate(axz);
  }
}

async function fetchApi() {
  var searchValue = recipie.value;
  const api1 = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${app_id}&app_key=${app_key}&to=20`;
  const response = await fetch(api1);
  const data = await response.json();
  console.log(data);
  genarateHtml(data.hits);
}
async function fetchRecipie(searchValue) {
  const api1 = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${app_id}&app_key=${app_key}&from=1&to=10`;

  const response = await fetch(api1);
  const data = await response.json();
  console.log(data);
  genarateHtml(data.hits);
}
// Function to fetch recipies from edamam api
async function fetchTemplate(axz) {
  loader.style.display = "block";
  const response = await fetch(axz);
  const data = await response.json();
  loader.style.display = "none";

  console.log(data);
  genarateHtml(data.hits);
}
// Function to populate result on to screen
function genarateHtml(results) {
  let generatedHTML = "";
  results.map((res) => {
    generatedHTML += `
        <div class="col-12 col-sm-6  col-md-6 col-lg-4 mb-4 mb-sm-4 mb-md-4 mb-lg-4" >
        <div class="Foodcard">
            <div class="Imgwrap">
                <img src="${
                  res.recipe.image
                }" alt="foodrecipie_icon" class="ImageHold">
            </div>
            <div class="FoodCardContent d-block my-4">
                <h5 class="foodRecipieTitle mb-2" id="${
                  res.recipe.uri
                }" onclick="fullDetail(event)" >${res.recipe.label}</h5>
            </div>
            <div class="DietContent mb-3">
            <p>Calories : <span>${res.recipe.calories.toFixed(2)}</span></p>
            </div>
            <p class="dishcontent mb-3">Dish Type: <span>${
              res.recipe.dishType
            }</span></p>
            <p class="mealtype">Meal Type: <span>${
              res.recipe.mealType
            }</span></p>
        </div>
    </div>
        `;
  });
  Outputrecipies.innerHTML = generatedHTML;
}

function homePageHtml(results) {
  let generatedHTML = "";
  results.map((res) => {
    generatedHTML += `
            <div class="col-12 col-sm-6  col-md-6 col-lg-4 mb-4 mb-sm-4 mb-md-4 mb-lg-4">
            <div class="Foodcard">
                <div class="Imgwrap">
                    <img src="${
                      res.recipe.image
                    }" alt="foodrecipie_icon" class="ImageHold">
                </div>
                <div class="FoodCardContent d-block my-4" >
                    <h5 class="foodRecipieTitle mb-2" id="${
                      res.recipe.uri
                    }" onclick="fullDetail(event)" >${res.recipe.label}</h5>
                </div>
                <div class="DietContent mb-3">
                <p>Calories : <span>${res.recipe.calories.toFixed(2)}</span></p>
                </div>
                <p class="dishcontent mb-3">Dish Type: <span>${
                  res.recipe.dishType
                }</span></p>
                <p class="mealtype">Meal Type: <span>${
                  res.recipe.mealType
                }</span></p>
            </div>
        </div>
            `;
  });
  homeRecipie.innerHTML = generatedHTML;
}

function myFunction(e) {
  let section = e.target.parentNode.parentNode.nextSibling.nextElementSibling;
  let x = e.target;
  if (x.style.rotate === "" || x.style.rotate === "0deg") {
    x.style.rotate = "180deg";
    section.style.display = "block";
  } else {
    x.style.rotate = "0deg";
    section.style.display = "none";
  }
}

// Full Detail Function

// Details
async function fullDetail(event) {
  let uri = event.target.id;
  uri = encodeURIComponent(uri);

  let searchValue = recipie.value;

  const api3 = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=${app_id}&app_key=${app_key}`;
  try {
    const response = await fetch(api3);
    const data = await response.json();
    recipePage.style.display = "none";
    homePage.style.display = "none";
    showDetailInfo(data.hits);
  } catch (error) {
    recipePage.innerHTML = error;
    console.log(error);
  }
}
// Show detail info
function showDetailInfo(results) {
  results = results[0];
  let ingredient = "";
  results.recipe.ingredientLines.map((ingr) => {
    ingredient += `<p>${ingr}</p>`;
  });
  let detailDiv = document.createElement("div");
  detailDiv.innerHTML = `<div><button class="btn btn-dark" style="margin-bottom : 20px" onclick="Back()">Back</button></div>
    <div class="detail-flag">
    <div class="detail-img-container">
    <img src="${results.recipe.image}" alt="foodrecipie_icon" class="ImageHold">
    </div>
    <div>
        <h1>${results.recipe.label}</h1>
        <p>By ${results.recipe.source}</p>
        <div class="main-detail-container">
            <div class="main-detail">
                <h2>${parseInt(results.recipe.calories)}</h2>
                <p>Calories</p>
            </div>
            <div class="main-detail middle">
                <h2>${results.recipe.ingredientLines.length}</h2>
                <p>Ingredients</p>
            </div>
            <div class="main-detail">
                <h2>${results.recipe.totalTime}</h2>
                <p>Minutes</p>
            </div>
        </div>
        <div>
            <div class="recipie-type">
                <p class="border">${results.recipe.cuisineType[0]}</p>
                <p class="border">${results.recipe.mealType[0]}</p>
                <p class="border">${results.recipe.dishType[0]}</p>
            </div>
        </div>
        <div class="ingredient-container">
            <h5>Ingredients</h5>
            ${ingredient}
        </div>
        <a href="${
          results.recipe.url
        }" target="_blank" class="RecipieLink">view full recipie</a>

    </div>

</div>`;
  main.innerHTML = "";
  main.style.display = "block";
  main.appendChild(detailDiv);
}

function Back() {
  main.innerHTML = "";
  recipePage.style.display = "flex";
}

// Home search
var submitHome = document.querySelector("#submitInputHome");
var recipieHome = document.querySelector("#EnterRecipiesHome");
function handleHome() {
  let result = recipieHome.value;
  homePage.style.display = "none";
  recipePage.style.display = "flex";
  navHome.classList.remove("active");
  navRecipie.classList.add("active");
  fetchRecipie(result);
}
