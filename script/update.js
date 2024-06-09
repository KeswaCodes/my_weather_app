let daysDictionary = loadDays();    

export function getDay(day) {
    return daysDictionary[day];
}


export function loadDays() {
    let daysDictionary = Object.create(null);
    daysDictionary[0] = "Sun";
    daysDictionary[1] = "Mon";
    daysDictionary[2] = "Tue";
    daysDictionary[3] = "Wed";
    daysDictionary[4] = "Thur";
    daysDictionary[5] = "Fri";
    daysDictionary[6] = "Sat";
    return daysDictionary;
}



export function updateTemps(responseObject) {

    for(let i = 0; i < 5; i++) {
        let dayWeather = responseObject[i].temp;
        document.getElementById(daysMaxId[i]).innerHTML = Math.round(dayWeather.max);
        document.getElementById(daysMinId[i]).innerHTML = Math.round(dayWeather.min);
    }
}




export function updateIcons(weatherResponse) {

    // console.log(weatherResponse);
    var days =["day-one-icon","day-two-icon","day-three-icon","day-four-icon","day-five-icon"]


    for(let i = 0; i < 5; i++) {
        let summary = weatherResponse[i].weather[0].main;
        let newIcon = matchIcon(summary);
        document.getElementById(days[i]).setAttribute("src", newIcon);
    }


}





export function updateWeatherDays() {
    const dt = new Date();
    var currentDay = dt.getDay();
    let count = 0;
    let actualCurrentDay = currentDay + count;

    for(let j = 0; j < 5; j++) {
        if(actualCurrentDay === 7) {actualCurrentDay = 0;}
        let weekday = getDay(Number(actualCurrentDay));
        document.getElementById(days[j]).innerHTML = weekday;
        // console.log(weekday);
        actualCurrentDay++;
    }
}

