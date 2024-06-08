export function validateCityName(apiResponse) {
    // console.log(apiResponse.status);

    myVar = apiResponse.data.length === 0;
    if(myVar == true) return false;
    return true;
}


export function validateSearchButton(inpt) {
    let inputHolder = inpt.trim();
    if(inputHolder === '') return false;
    return true;
}
