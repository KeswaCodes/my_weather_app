var latitude = 0, longitude = 0;

let api = "773de069efc30b89839c476356b2799f";
function main() {
    // hi 
}



function getWeatherInfo(long, lati) {

    console.log(lati);
    console.log(long);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${api}&units=metric`; // this is for one day forecast
    // let apiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&appid=${api}`; // this is for 5 day forecast 
    axios.get(apiUrl).then(response => {console.log(response);});
    // axios.get(apiUrl);
    
}



function getPts() {
    var cityName = document.getElementById('search-btn').value;
    let check = validInput(cityName);
    if(check === false) return;
    
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${api}`;
    axios.get(url).then((response) => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
        // console.log(latitude);
        getWeatherInfo(longitude.toFixed(2), latitude.toFixed(2)); // toFixed(x) rounds off to x decimal places
        });
    
}


function validInput(inpt) {
    let inputHolder = inpt.trim();
    if(inputHolder == '') return false;
    return true;
}
