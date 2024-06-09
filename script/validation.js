export function validateCityName(apiResponse) {
    if(apiResponse.data.length === 0) return false;
    return true;
}

export function validateSearchButton(inpt) {
    let inputHolder = inpt.trim();
    if(inputHolder === '') return false;
    return true;
}
