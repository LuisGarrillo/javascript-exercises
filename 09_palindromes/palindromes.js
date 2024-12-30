const palindromes = function (word) {
    word = word.toLowerCase();
    let reversedWord = "";
    let normalWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        if ((word[i].charCodeAt(0) >= 97 && word[i].charCodeAt(0) <= 122) || (word[i].charCodeAt(0) >= 48 && word[i].charCodeAt(0) <= 57))
            reversedWord += word[i];
    }
    for (let i = reversedWord.length - 1; i >= 0; i--) {
        normalWord +=  reversedWord[i]
    }
    return normalWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
