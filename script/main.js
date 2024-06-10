var days =["day-one","day-two","day-three","day-four","day-five", "day-six", "day-seven"]
var daysMaxId = ["day-one-max","day-two-max","day-three-max","day-four-max","day-five-max"]
var daysMinId = ["day-one-min","day-two-min","day-three-min","day-four-min","day-five-min"]
let position = navigator.geolocation.getCurrentPosition(displayInitialUpdate);
var latitude  = 0, longitude = 0;
let api = "773de069efc30b89839c476356b2799f";


function displayInitialUpdate(obj) {
    let lati = obj.coords.latitude;
    let long = obj.coords.longitude;
    import("./update.js").then(module => {module.loadDays();}).catch();
    displayResponse(lati, long);
}
 

function displayResponse(lati, long) {
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&exclude=minutely,hourly,current,alerts&appid=${api}`;
    axios.get(apiUrl).then((response) => {
        const responseHolder = response;
        import("./update.js").then(update => {
            update.updateWeatherDays();
            update.updateTemps(responseHolder.data.daily);
            update.updateIcons(responseHolder.data.daily);
        }).catch();
        
    });
}


function newDay(){
    const dt = new Date();
    let date = (dt.getMonth() + 1).toString() + "/" + (dt.getDate()).toString();
    document.getElementById('day-one').innerHTML = " " + date + " ";
}


function getWeatherInfo(long, lati) {

    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${api}&units=metric`; // this is for one day forecast
    // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&units=metric&appid=${api}`; // this is for 5 day forecast 
    
    // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lati}&lon=${long}&units=metric&cnt=5&appid=${api}`;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&exclude=minutely,hourly,current,alerts&appid=${api}`;

    const dt = new Date().getDay();
    let day = getDay(dt);
    document.getElementById('day-one').innerHTML = day;
    axios.get(apiUrl).then(response => {console.log(response);});
    
}



function getPts() {
    var cityName = document.getElementById('search-btn').value;
    import("./validation.js").then(validation => {
        let check = validation.validateSearchButton(cityName);
        if(check === false) return;
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${api}`;
        axios.get(url).then((response) => {
            validCity = validation.validateCityName(response);
            if(validCity == false) {
                displayResponse(-26.20, 28.05);
                return;
            }
            else {
                latitude = response.data[0].lat;    
                longitude = response.data[0].lon;
                displayResponse(latitude.toFixed(2), longitude.toFixed(2));
            }
            });
    }).catch(); 
    
}