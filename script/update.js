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
        let summary = weatherResponse[i].weather[0].description;
        let newIcon = matchIcon(summary.toLowerCase());

        document.getElementById(days[i]).setAttribute("src", newIcon);
    }


}

export function matchBackground(weatherDescription) {
    // console.log("Entered matching background");
    // console.log(weatherDescription);

    // responseHolder.data.daily[0].weather[0].description
    

    let background;

    if(weatherDescription.includes("clear sky")) {background = 'videos/clear_day.mp4';}
    else if(weatherDescription.includes("overcast clouds")) {background = 'videos/cloudy.mp4';}
    else if(weatherDescription.includes("light rain")) {background = 'videos/lightRain.mp4';}
    else if(weatherDescription.includes("broken cloud") || weatherDescription.includes("scattered clouds") || weatherDescription.includes("few clouds")) {background = 'videos/partly_cloudy.mp4';}
    else if(weatherDescription.includes("snow")) {background = 'videos/snowy.mp4';}
    else if(weatherDescription.includes("heavy") || weatherDescription.includes("moderate rain")) {background = 'videos/lightning.mp4';}
    
    document.getElementById("five-day-background-video").setAttribute('src', background);
    // document.getElementById("single-day-background-video").setAttribute('src', background);

    // console.log(background);
    return background;
    
}






export function matchIcon(weatherDescription) {
    
    let img;
    if(weatherDescription.includes("clear sky")) {img = 'svg_icons/Sun.svg';}
    else if(weatherDescription.includes("overcast clouds")) {img = 'svg_icons/Cloud.svg';}
    else if(weatherDescription.includes("light rain")) {img = 'svg_icons/rain.svg';}
    else if(weatherDescription.includes("moderate rain")) {img = 'svg_icons/lightning.svg';}
    else if(weatherDescription.includes("heavy")) {img = 'svg_icons/lightning&rain.svg';}
    else if(weatherDescription.includes("broken cloud") || weatherDescription.includes("scattered clouds")) {img = 'svg_icons/sunbehindcloud.svg';}
    else if(weatherDescription.includes("few clouds")) {img = 'svg_icons/sunsmalllcloud.svg';}
    else if(weatherDescription.includes("snow")) {img = 'svg_icons/snow.svg';}

    else {img = 'svg_icons/Sun.svg';}

    return img;



    

    
    
    // let img = 'svg_icons/Sun.svg';
    // switch(String(weatherDescription)) {
    //     case "Clear":
    //         img = 'svg_icons/Sun.svg';
    //         break;
    //     case "Clouds":
    //         img = 'svg_icons/sunsmalllcloud.svg';
            
    //         break;
    //     case "Rain":
    //         img = 'svg_icons/rain.svg';
    //         break;
    // }

    // return img;

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

