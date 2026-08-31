//Hele navnet upperCase



//Nr 1 PETER

const fullName = "peter";

console.log(fullName.toUpperCase());

//Nr 2 pETer

const second = fullName[0].toLowerCase() + fullName[1].toUpperCase() + fullName[2].toUpperCase() + fullName[3].toLowerCase() + fullName[4].toLowerCase();

console.log(second);

//Nr 3 PEter

const third = fullName[0].toUpperCase() + fullName[1].toUpperCase() + fullName.substring(2,5);

console.log(third);

//Nr 4 peteR

const fourth = fullName.substring(0, 4) + fullName[4].toUpperCase();

console.log(fourth);


//Nr 5 PEtER

const fifth = fullName[0].toUpperCase() + fullName[1].toUpperCase() + fullName[2].toLowerCase() + fullName[3].toUpperCase() + fullName[4].toUpperCase();

console.log(fifth);


//Given a single name string in an unknown case, e.g. “peter” or “PETER” - create a new string with the same name, where the third letter is uppercase, and the rest is lowercase. I.e. “peTer”.

//Hint: use substring, toUpperCase, toLowerCase and simple string concatenation