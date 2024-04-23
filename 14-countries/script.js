let flagImage = document.getElementsByClassName("flag-img")[0];
let name = document.getElementsByClassName("name")[0];
let population = document.getElementsByClassName("population")[0];
let region = document.getElementsByClassName("region")[0];
let capital = document.getElementsByClassName("capital")[0];
let selectArea = document.getElementsByClassName("select-area")[0];
let backButton = document.getElementsByClassName("back")[0];

// Dark theme Button
let theme = document.getElementById("theme");

// let main = document.getElementById
let main = document.getElementById("main");

// Dropdown elements
let dropRegion = document.getElementsByClassName("drop-region");

fetch('data.json')
.then(res => res.json())
.then(data => showData(data))




function showData(data){
    data.forEach(element => {
        // console.log(element);
        var elemDiv = document.createElement('div');
        elemDiv.classList.add("container");
        elemDiv.innerHTML = `<img class="flag-img" src="${element.flags.svg}" alt="" style="object-fit: cover" />
        <div class="basicInfo">
            <h3 class="name">${element.name}</h3>
            <p class="population"><span>Population: </span>${element.population.toLocaleString()}</p>
            <p class="region"><span>Region: </span>${element.region}</p>
            <p class="capital"><span>Capital: </span>${element.capital}</p>
        </div>`
        main.appendChild(elemDiv);
        let name = element.name ;
        elemDiv.onclick = function() { showDetailInfo(element); }
    });
}


// Dark Theme Switching
theme.addEventListener('click',()=>{
    document.body.classList.toggle("light-theme");
    console.log(theme.textContent)
    if(theme.textContent == "Light Mode"){
        theme.innerHTML = `<box-icon type='solid' color="hsl(200, 15%, 8%) " name='moon'></box-icon><h5>Dark Mode</h5>`
    }
    else{
        theme.innerHTML = `<box-icon type='solid' color="hsl(0, 0%, 100%)" name='sun'></box-icon><h5>Light Mode</h5>`
    }

    // <box-icon type='solid' name='moon'></box-icon>Dark Mode
})

// Back Button 
function back(){
    main.innerHTML = ""
    backButton.style.display = "none"
    selectArea.style.display = "flex"
    main.style.display = "grid"
    fetch('data.json')
.then(res => res.json())
.then(data => backData(data))

function backData(data){
    data.forEach(element => {
        // console.log(element);
        var elemDiv = document.createElement('div');
        elemDiv.classList.add("container");
        elemDiv.innerHTML = `<img class="flag-img" src="${element.flags.svg}" alt="" style="object-fit: cover" />
        <div class="basicInfo">
            <h3 class="name">${element.name}</h3>
            <p class="population"><span>Population: </span>${element.population.toLocaleString()}</p>
            <p class="region"><span>Region: </span>${element.region}</p>
            <p class="capital"><span>Capital: </span>${element.capital}</p>
        </div>`
        main.appendChild(elemDiv);
        let name = element.name ;
        elemDiv.onclick = function() { showDetailInfo(element); }
    });
}
}

// Search and displaying The countries
function myFunction() {
    let text = document.getElementById("myInput").value;
    fetch('data.json')
    .then(res => res.json())
    .then(data => searchData(data))
    
    main.innerHTML = "";

    function searchData(data){
        data.forEach(element =>{
            // console.log(element.name.toLowerCase());
            if(element.name.toLowerCase().indexOf(text.toLowerCase())> -1){
                var elemDiv = document.createElement('div');
                elemDiv.classList.add("container");
                elemDiv.innerHTML = `<img class="flag-img" src="${element.flags.svg}" alt="" style="object-fit: cover" />
                <div class="basicInfo">
                    <h3 class="name">${element.name}</h3>
                    <p class="population"><span>Population: </span>${element.population.toLocaleString()}</p>
                    <p class="region"><span>Region: </span>${element.region}</p>
                    <p class="capital"><span>Capital: </span>${element.capital}</p>
                </div>`
                main.appendChild(elemDiv);
                elemDiv.onclick = function() { showDetailInfo(element); }
            }
        })
    }
}

// Droprdown 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDOWN() {
    document.getElementById("myDropdown").classList.toggle("show");
}  
  // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }

//  Dropdown Display The Elements in Main 
dropRegion = Array.from(dropRegion)
dropRegion.forEach((element)=>{
    element.addEventListener('click',()=>{

        fetch('data.json')
        .then(res => res.json())
        .then(data => searchData(data))

        main.innerHTML = "";
        function searchData(data){
            data.forEach(elem =>{
                if(element.textContent == elem.region){
                    var elemDiv = document.createElement('div');
                elemDiv.classList.add("container");
                elemDiv.innerHTML = `<img class="flag-img" src="${elem.flags.svg}" alt="" style="object-fit: cover" />
                <div class="basicInfo">
                    <h3 class="name">${elem.name}</h3>
                    <p class="population"><span>Population: </span>${elem.population.toLocaleString()}</p>
                    <p class="region"><span>Region: </span>${elem.region}</p>
                    <p class="capital"><span>Capital: </span>${elem.capital}</p>
                </div>`
                main.appendChild(elemDiv);
                elemDiv.onclick = function() { showDetailInfo(elem); };
                }
            })
        }
    })
})


// Click to show detail info of countries
let container = document.getElementsByClassName("container");
container1 = Array.from(container);
// container.forEach((element)=>{
//     element.addEventListener('click',showDetailInfo())
// })
function showDetailInfo(element){
    selectArea.style.display = "none";
    backButton.style.display = "block"
    console.log("Hello");
    console.log(element);
    let borderList = document.createElement("div");
    if(element.borders === undefined){
        console.log("hello");
    }else{
        borderList.classList.add("border-list");
        element.borders.forEach((bor) =>{
            let para = document.createElement("p");
            para.classList.add("border");
            para.innerHTML = `${bor}`
            borderList.appendChild(para)
        })
        console.log(borderList);    
    }
        


    let detailDiv = document.createElement("div");
    detailDiv.classList.add("detail");
    detailDiv.innerHTML = `<div class="detail-flag">
    <img class="flag" src="${element.flags.svg}" alt="${element.name}"/>
    </div>
    <div class="detail-info-container">
        <h2>${element.name}</h2>
        <div class="detail-info">
            <div class="info-left">
                <p><span>Native Name: </span>${element.nativeName}</p>
                <p><span>Population: </span>${element.population}</p>
                <p><span>Region: </span>${element.region}</p>
                <p><span>Sub Region: </span>${element.subregion}</p>
                <p><span>Capital: </span>${element.capital}</p>
            </div>
            <div class="info-right">
                <p><span>Top Level Domain: </span>${element.topLevelDomain}</p>
                <p><span>Currencies: </span>${element.currencies[0].name}</p>
                <p><span>Languages: </span>${element.languages[0].name}</p>
            </div>
            </div>
            <div class="border-countries">
            <h4>Border Countries: </h4>
            ${borderList.outerHTML}
            </div> 
        </div>
        
    </div>`
    main.innerHTML ="";
    main.style.display = "block"
    main.appendChild(detailDiv);

}


