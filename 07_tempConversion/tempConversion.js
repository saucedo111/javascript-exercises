const convertToCelsius = function (num) {
    let ret = 5 / 9 * (num - 32);
    ret = ret.toFixed(1);
    return parseFloat(ret);
};

const convertToFahrenheit = function (num) {
    let ret = 9 / 5 * num + 32;
    ret = ret.toFixed(1);
    return parseFloat(ret);
};

// Do not edit below this line
module.exports = {
    convertToCelsius, convertToFahrenheit
};
