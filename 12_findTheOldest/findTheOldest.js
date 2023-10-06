const findTheOldest = function(arr) {
    let old = '';
    let age = 0;
    for(let i = 0; i < arr.length; i++){
        if('yearOfDeath' in arr[i]) {
            if (arr[i].yearOfDeath - arr[i].yearOfBirth > age) {
                age = arr[i].yearOfDeath - arr[i].yearOfBirth;
                old = arr[i];
            }
        }
        else {
            if (2023 - arr[i].yearOfBirth > age) {
                age = 2023 - arr[i].yearOfBirth;
                old = arr[i];
            }
        }
    }
    return old;
};

// Do not edit below this line
module.exports = findTheOldest;
