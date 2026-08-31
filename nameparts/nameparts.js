const fullName = "Peter Heronimous Lind";

//firstName


const firstName = fullName.substring(0, fullName.indexOf(" "));

console.log(firstName);
//middleName

const middleName = fullName.substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "));
console.log(middleName);


//lastName

const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log(lastName);


//console.log fra klaus

console.log(fullName.indexOf(" "), fullName.indexOf(" "));

console.log("firstName", `_$(firstName)`);
console.log("middleName", `_$(middleName)`);