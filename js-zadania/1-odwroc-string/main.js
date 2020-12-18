let reverseStringReverse = (textToReverse) => {
    return textToReverse.split("").reverse().join("");
};

let result = reverseStringReverse("Akademia108")
console.log(result);


// /2 sposób


let reverseStringReduce = (textToReverse) => {
    return textToReverse
        .split("")
        .reduce(
            (reversedText, character) => character + reversedText,
            ""
        );
};

let result1 = reverseStringReduce("Akademia108")
console.log(result1);




