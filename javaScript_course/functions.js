/* --------------------------------------
          3. FUNCTIONS
----------------------------------------- */
/* Vi bruger functions (funktioner) i JavaScript, fordi de gør det muligt at samle kode, genbruge den og organisere programmet.*/

/*

├── 
│   ├── Functions
│   ├── Parameters
│   ├── Arguments
│   ├── Return
│   ├── Arrow functions
│   └── Callbacks
*/

// 

/*
Sæt const/let inde i funktionen, hvis variablen kun skal bruges af funktionen. Sæt den udenfor, hvis flere funktioner eller resten af programmet skal kunne bruge den.
*/
//============================================================
//           Navngivet og anonyme funktioner i JS
// ============================================================
//  NAVNGIVET                         ANONYM
//
//  Har et navn                       Har ikke et navn
//
//  function sayHello() {}            function() {}
//
//  Kaldes med sit navn               Kaldes typisk via en
//                                    variabel/reference
//
//  God til funktioner,               God til callbacks og
//  der skal genbruges                funktioner, der kun
//                                    bruges ét bestemt sted

//============================================================
//                     RANDOM NUMBER
// ============================================================

// "function" fortæller JavaScript, at vi opretter en funktion
//
// "randomNumber" er navnet på funktionen
//
// "()" bruges til eventuelle parametre, som funktionen skal modtage
//
// "{}" indeholder den kode, som funktionen skal udføre
/*
function randomNumber() {

    // Math.random() laver et tilfældigt decimaltal
    // mellem 0 (inkl.) og 1 (ekskl.)
    //
    // Eksempel:
    // 0.2548
    // 0.7821
    // 0.9314

    // Math.floor() runder tallet ned til nærmeste hele tal
    //
    // Math.random() * 10 giver et tal fra 0 til lige under 10
    //
    // Math.floor() gør det til et helt tal fra 0 til 9

    let number = Math.floor(Math.random() * 10);

    // "return" sender resultatet tilbage fra funktionen
    //
    // Funktionen afsluttes, og værdien af "number"
    // bliver sendt tilbage til det sted, hvor funktionen blev kaldt

    return number;
}

*/
// ============================================================
//                     KALD AF FUNKTIONEN
// ============================================================
/*
// Her kalder vi funktionen med dens navn efterfulgt af "()"

let result = randomNumber();


// Her viser vi resultatet i konsollen

console.log(result);
*/

