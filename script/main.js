var days =["day-one","day-two","day-three","day-four","day-five"]
var daysMaxId = ["day-one-max","day-two-max","day-three-max","day-four-max","day-five-max"]
var daysMinId = ["day-one-min","day-two-min","day-three-min","day-four-min","day-five-min"]
let position = navigator.geolocation.getCurrentPosition(displayPt);
var latitude = 0, longitude = 0;
let api = "773de069efc30b89839c476356b2799f";
let daysDictionary = Object.create(null);
loadDays();






function displayPt(obj) {
    let lati = obj.coords.latitude;
    let long = obj.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&exclude=minutely,hourly,current,alerts&appid=${api}`;
    axios.get(apiUrl).then((response) => {
        const responseHolder = response;
        // return responseHolder;
        updateWeatherDates();
            updateIcons(responseHolder.data.daily);
    });
    // }).then(updateWeatherDates).then(updateIcons);}
}
 




function loadDays() {
    daysDictionary[0] = "Sun";
    daysDictionary[1] = "Mon";
    daysDictionary[2] = "Tue";
    daysDictionary[3] = "Wed";
    daysDictionary[4] = "Thur";
    daysDictionary[5] = "Fri";
    daysDictionary[6] = "Sat";

    return daysDictionary;
}

function getDay(day) {
    return daysDictionary[day];
}


function updateTemps(responseObject) {
    for(i = 0; i < 5; i++) {
    }
}



function updateIcons(weatherResponse) {

    // console.log(weatherResponse);
    var days =["day-one-icon","day-two-icon","day-three-icon","day-four-icon","day-five-icon"]


    for(i = 0; i < 5; i++) {
        // console.log(weatherResponse[i].weather[0].main);
        // console.log("Hiiii");
        let newIcon = matchIcon(weatherResponse[i].weather[0].main);
        document.getElementById(days);
        console.log(newIcon);
        // console.log(myvar);
    }


}

function matchIcon(weatherSummary) {

    // console.log(weatherSummary);
    var img = "";
    // console.log(weatherSummary);
    switch(weatherSummary) {

        case "Clouds":
            img = "svg_icons/Cloud.svg";
            break;

        case "Rain":
            img = "svg_icons/Cloud_with_rain.svg";
            break;

        case "Clear":
            img = "svg_icons/Sun.svg";
        default:
            img = "svg_icons/Sun behind cloud.svg";
    }

    // console.log(img);
    return img;

}



//   trying to get weather app to work with the days of the week instead of just days 



function updateWeatherDates() {

    const dt = new Date();
    var currentDay = dt.getDay();
    let sunday = new Date("2024-06-02");
    console.log(sunday.getDay());
    for(i = 0; i < 5; i++) {
        var myInt = Number(currentDay + i);
        // console.log(sunday.getDay());
        if(Number(currentDay) == Number(sunday.getDay())) {
            myInt = 0;
            console.log("Chnaged");


        }
        weekDay = getDay(myInt);
        document.getElementById(days[i]).innerHTML = weekDay;
        // document.getElementById(days[i]).innerHTML =  currentMonth + "/" + weekDay;
    }

}


function writeToFile() {


    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
      })
      
    
    
    
    // axios.get('https://api.example.com/data')
    // .then(response => {
    //     // Assuming response.data contains the JSON data
    //     const jsonData = response.data;

    //     // Convert JavaScript object to JSON string
    //     const jsonString = JSON.stringify(jsonData);

    //     // Write JSON string to a file
    //     fs.writeFile('output.json', jsonString, 'utf8', (err) => {
    //         if (err) {
    //             console.error('Error writing JSON file:', err);
    //             return;
    //         }
    //         console.log('JSON file has been saved.');
    //     });
    // })
    
    
    
}



function newDay(){
    
    const dt = new Date();
    let date = (dt.getMonth() + 1).toString() + "/" + (dt.getDate()).toString();
    document.getElementById('day-one').innerHTML = " " + date + " ";
}

function getWeatherInfo(long, lati) {

    // console.log(lati);
    // console.log(long);
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${api}&units=metric`; // this is for one day forecast
    // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${long}&units=metric&appid=${api}`; // this is for 5 day forecast 
    
    // let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lati}&lon=${long}&units=metric&cnt=5&appid=${api}`;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lati}&lon=${long}&units=metric&exclude=minutely,hourly,current,alerts&appid=${api}`;

    const dt = new Date();
    let date = (dt.getMonth() + 1).toString() + "/" + (dt.getDate()).toString();
    // let date = ((dt.getMonth() + 1).toString()).concat("/", dt.getDate().toString());
    document.getElementById('day-one').innerHTML = " " + date + " ";

    axios.get(apiUrl).then(response => {console.log(response);});
    // axios.get(apiUrl);
    
}



function getPts() {
    var cityName = document.getElementById('search-btn').value;
    let check = validInput(cityName);
    if(check === false) return;
    getWeatherInfo(-26.20, 28.05);
    // getWeatherInfo(18.41, -33.92);

    // let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${api}`;
    // axios.get(url).then((response) => {
    //     latitude = response.data[0].lat;
    //     longitude = response.data[0].lon;
    //     console.log(latitude);
    //     console.log(longitude);

    //     getWeatherInfo(latitude.toFixed(2), longitude.toFixed(2)); // toFixed(x) rounds off to x decimal places
    //     });
    
}




function validInput(inpt) {
    let inputHolder = inpt.trim();
    if(inputHolder == '') return false;
    return true;
}

// main();