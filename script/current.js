// import { matchBackground } from './update.js';

let weatherData;
let currentDayWeather;


window.onload = function() {
    
    console.log("Printing");
    // import('./storage.js').then(storage => {

    //     let data = storage.readTxtFile();
    //     console.log(data);
        
        
    // }).catch();
    console.log("Printed");
    
}


export function myFun(id) {
    let num = 0;
    let numstr = '0';
    let res;
    import('./storage.js').then(storage => {

        
        for(let i = 0; i < 6; i++) {
            
            if(i === Number(id)) {
                currentDayWeather = storage.apiResponse.data.daily[i];
                import('./storage.js').then(storage => {
                    storage.setCurrentDayWeather(currentDayWeather);
                    storage.removeTxtFile();
                    storage.writeToTxtFile(currentDayWeather);
                    console.log("weather set to");
                    console.log(currentDayWeather);
                    console.log("Printed");
                }).catch();
                console.log("Printing current weather");
                console.log(currentDayWeather);

                import('./update.js').then(update => {
                    res = update.matchBackground(currentDayWeather.weather[0].description);
                    console.log("The background is");
                    console.log(res);
                        // document.getElementById("single-day-background-video").setAttribute('src', res);

                }).catch();
                
                break;
            }
        }
        
    }).catch();

    weatherData = currentDayWeather;
    let obj = new Date("October 13, 2014 22:13:00");
    let hour = obj.toLocaleTimeString().replace(" ", ":").split(":");
    // console.log("Inside myFUn");
    // console.log(weatherData);
    // let bckvid = matchBackground();
    // console.log(weatherData);
    // console.log(bckvid);
}


function setTimeOfDay(localTimeString) {
    let timeOfDay = "";
    let hour = null;
    let meridiem = localTimeString[localTimeString.length - 1];

    if(meridiem === 'AM') {
        hour = Number(localTimeString[0]);
        if(hour >= 12 || hour <= 6) {timeOfDay = "night";}
        else{timeOfDay = "morn"}
    }

    else {
        hour = Number(localTimeString[0]);
        if(hour >= 12 || hour <= 6) {timeOfDay = "day";}
        else{timeOfDay = "eve"}
    }

    return timeOfDay;
}
