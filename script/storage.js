const fs = require('fs');
const axios = require('axios');
let api = "773de069efc30b89839c476356b2799f";

export let apiResponse = null;

export function setResponse(response) {
    apiResponse = response;
}

export function setCurrentDayWeather(weather) {currentWeather = weather;}


export function writeToTxtFile(response) {
    let jsonStr = JSON.stringify(response.data.daily);
    fs.writeFile('response.txt', jsonStr, 'utf8', (error) => {
    if (error) {
        console.error('An error occurred while writing to the file:', error);
        return;
    }
    console.log('File has been written successfully.');});
}


export function readTxtFile(){
    try {
    const data = fs.readFileSync('response.txt', 'utf8');
    const obj = JSON.parse(data);
    // console.log('About to write the data in the file...');
    // console.log(obj[0]);
    // console.log(data);
    } catch (err) {
    console.error(err);
    }
    return obj;
}



export function removeTxtFile() {

    fs.unlink('response.txt', (err) => {
    if (err) {
        // console.error(`Error removing file: ${err}`);
        return;
    }
});
    console.log("File has been removed! ");
    
}






// const content = 'This is the content to be written to the file.';
// fs.writeFile('example.txt', content, 'utf8', (error) => {
//     if (error) {
//         console.error('An error occurred while writing to the file:', error);
//         return;
//     }
//     console.log('File has been written successfully.');
// });












