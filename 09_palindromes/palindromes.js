const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    str = str.replace(/\s+/g, '')
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
