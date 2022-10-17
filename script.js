//declare api key and base as constants
const api = {
    key: "2c931dacd44278418a80b71cf093ac78",
    base: "https://api.openweathermap.org/data/2.5/"
}

//declare search and btn class as constant
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

//adding Event Listener to the button 
btn.addEventListener("click", getInput);

//disallow refresh/reload after submit
function getInput (event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
        
        //testing to see the result in our browser inspect element=>console
        console.log(search.value);
    }
}

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
        
}

//getting a valid response from the text box
function displayData (response) {
    // conditions
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city";
        search.value = "";
    } else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

        search.value = "";
    }
}

//date function declaration

function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

//getting the date result

    return `${day}, ${date} ${month} ${year}`;
}
