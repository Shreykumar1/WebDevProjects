// async function fetchDetail(){

//     var searchValue = recipie.value;
//     console.log(searchValue);
//     const axz = `https://api.edamam.com/api/recipes/v2?type=public&app_id=f3db6593&app_key=ae0e0cc371f72dcdd51855b20db4f95b&mealType=Breakfast`
//     const api1 = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${app_id}&app_key=${app_key}&to=20`;
//     const api = `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_f3e09663366bd24f72e6db6d6c892949&app_id=24daaec0&app_key=8f273ff45853c56b49f78d2fbb060d04`;
    
//     const response = await fetch(api);
//     const data = await response.json();
//     console.log(data);
//     showDetailInfo(data.hits);
// }


// function showDetailInfo(results){
//     // selectArea.style.display = "none";
//     // backButton.style.display = "block"
//     // console.log("Hello");
//     // console.log(element);
//     // let borderList = document.createElement("div");
//     // if(element.borders === undefined){
//     //     console.log("hello");
//     // }else{
//     //     borderList.classList.add("border-list");
//     //     element.borders.forEach((bor) =>{
//     //         let para = document.createElement("p");
//     //         para.classList.add("border");
//     //         para.innerHTML = `${bor}`
//     //         borderList.appendChild(para)
//     //     })
//     //     console.log(borderList);    
//     // }
        

//     results = results[0];
//     let ingredient = '';
//     results.recipe.ingredientLines.map((ingr)=>{
//         ingredient+= `<p>${ingr}</p>`
//     })
//     let detailDiv = document.createElement("div");
//     detailDiv.innerHTML = `<div class="detail-flag">
//     <img src="${results.recipe.image}" alt="foodrecipie_icon" class="ImageHold">
//     <div>
//         <h1>${results.recipe.label}</h1>
//         <p>By ${results.recipe.source}</p>
//         <div class="main-detail-container">
//             <div class="main-detail">
//                 <h2>${parseInt(results.recipe.calories)}</h2>
//                 <p>Calories</p>
//             </div>
//             <div class="main-detail middle">
//                 <h2>${results.recipe.ingredientLines.length}</h2>
//                 <p>Ingredients</p>
//             </div>
//             <div class="main-detail">
//                 <h2>${results.recipe.totalTime}</h2>
//                 <p>Minutes</p>
//             </div>
//         </div>
//         <div>
//             <div class="recipie-type">
//                 <p class="border">${results.recipe.cuisineType[0]}</p>
//                 <p class="border">${results.recipe.mealType[0]}</p>
//                 <p class="border">${results.recipe.dishType[0]}</p>
//             </div>
//         </div>
//         <div class="ingredient-container">
//             <h5>Ingredients</h5>
//             ${ingredient}
//         </div>
//         <a href="${results.recipe.url}" target="_blank" class="RecipieLink">view full recipie</a>

//     </div>

// </div>`
//     main.innerHTML ="";
//     main.style.display = "block"
//     main.appendChild(detailDiv);

// }





// detailDiv.innerHTML = `<div class="detail-flag">
// <img class="flag" src="${element.flags.svg}" alt="${element.name}"/>
// </div>
// <div class="detail-info-container">
//     <h2>${element.name}</h2>
//     <div class="detail-info">
//         <div class="info-left">
//             <p><span>Native Name: </span>${element.nativeName}</p>
//             <p><span>Population: </span>${element.population}</p>
//             <p><span>Region: </span>${element.region}</p>
//             <p><span>Sub Region: </span>${element.subregion}</p>
//             <p><span>Capital: </span>${element.capital}</p>
//         </div>
//         <div class="info-right">
//             <p><span>Top Level Domain: </span>${element.topLevelDomain}</p>
//             <p><span>Currencies: </span>${element.currencies[0].name}</p>
//             <p><span>Languages: </span>${element.languages[0].name}</p>
//         </div>
//         </div>
//         <div class="border-countries">
//         <h4>Border Countries: </h4>
//         ${borderList.outerHTML}
//         </div> 
//     </div>
    
// </div>`