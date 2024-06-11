let weatherData;

export function myFun(id) {
    let num = 0;
    let numstr = '0';

    let currentDayWeather;

    import('./storage.js').then(storage => {

        for(let i = 0; i < 6; i++) {

            if(i === Number(id)) {
                // console.log('Hi');
                currentDayWeather = storage.apiResponse.data.daily;
                console.log(currentDayWeather);
                // console.log('Hi');
                break;
            }
        }
        
    }).catch();

    // console.log(currentDayWeather);
    weatherData = currentDayWeather;
    // console.log(num === Number(numstr));

    let obj = new Date("October 13, 2014 22:13:00");
    // let hour = obj.toISOString().replace('.', 'T').split('T')[1].split(":")[0];

    let hour = obj.toLocaleTimeString().replace(" ", ":").split(":");

    // console.log(hour);
    // setTimeOfDay(hour);

    // let period = hour[hour.length - 1]
    // console.log(period);
    // console.log(obj);
    // console.log(hour);


    // let hour = obj.toISOString().replace('.', 'T').split('T')[1].split(":")[0];
    
    console.log();
    // console.log(id);
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
