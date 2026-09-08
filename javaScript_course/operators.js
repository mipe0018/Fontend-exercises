/* --------------------------------------
          JAVASCRIPT
----------------------------------------- */
//https://javascript.info/first-steps

/*
Use Strict fundamentals.js
 Variables fundamentals.js
        let
        const
        var
 Data types fundamentals.js
        String
        Number
        Boolean
        Undefined
        Null
        Array
        Object
 Operators operators.js
        Assignment operators
        String operator
        Comparison operators
        Logical operator
Conditions conditions.js
       Statements
       if / else
       switch
       Loops
       Ternary


        
//============================================================
//                    ASSIGNMENT OPERATORS
//                    TILDELINGSOPERATORER
// ============================================================
//
// Assignment operators bruges til at TILDELE eller ÆNDRE
// værdien af en variabel.
//
//
// ------------------------------------------------------------
// =   Tildeling
// ------------------------------------------------------------
//
// Tildeler en værdi til en variabel.
//
// Eksempel:
// let x = 10;
//
// Betyder:
// x får værdien 10
//
//
// ------------------------------------------------------------
// +=  Læg til
// ------------------------------------------------------------
//
// Lægger en værdi til den eksisterende værdi.
//
// Eksempel:
// x += 5;
//
// Samme som:
// x = x + 5;
//
// Hvis x = 10, bliver x til 15.
//
//
// ------------------------------------------------------------
// -=  Træk fra
// ------------------------------------------------------------
//
// Trækker en værdi fra den eksisterende værdi.
//
// Eksempel:
// x -= 5;
//
// Samme som:
// x = x - 5;
//
// Hvis x = 10, bliver x til 5.
//
//
// ------------------------------------------------------------
// *=  Gang med
// ------------------------------------------------------------
//
// Ganger den eksisterende værdi med en anden værdi.
//
// Eksempel:
// x *= 5;
//
// Samme som:
// x = x * 5;
//
// Hvis x = 10, bliver x til 50.
//
//
// ------------------------------------------------------------
// /=  Divider med
// ------------------------------------------------------------
//
// Dividerer den eksisterende værdi med en anden værdi.
//
// Eksempel:
// x /= 5;
//
// Samme som:
// x = x / 5;
//
// Hvis x = 10, bliver x til 2.
//
//
// ------------------------------------------------------------
// %=  Rest ved division
// ------------------------------------------------------------
//
// Finder resten efter en division.
//
// Eksempel:
// x %= 5;
//
// Samme som:
// x = x % 5;
//
// Hvis x = 12:
// 12 % 5 = 2
//
// Derfor bliver x til 2.
//
//
//
// ============================================================
//                      STRING OPERATORS
//                      STRING-OPERATORER
// ============================================================
//
// String-operatorer bruges til at arbejde med tekst (strings).
//
//
// ------------------------------------------------------------
// +   Sæt strings sammen
// ------------------------------------------------------------
//
// Bruges til at sætte to eller flere strings sammen.
//
// Eksempel:
// "Hej " + "Navn"
//
// Resultat:
// "Hej Navn"
//
//
// ------------------------------------------------------------
// +=  Tilføj til en string
// ------------------------------------------------------------
//
// Tilføjer mere tekst til en eksisterende string.
//
// Eksempel:
// let tekst = "Hej";
// tekst += " verden";
//
// Resultat:
// "Hej verden"
//
// Samme som:
// tekst = tekst + " verden";
//
//
// ------------------------------------------------------------
// ===  Sammenlign strings
// ------------------------------------------------------------
//
// Kontrollerer om to strings er HELT ens.
//
// Eksempel:
// "hej" === "hej"
//
// Resultat:
// true
//
//
// Eksempel:
// "hej" === "Hej"
//
// Resultat:
// false
//
// Store og små bogstaver er forskellige.
//
//
// ------------------------------------------------------------
// !==  Kontroller om strings er forskellige
// ------------------------------------------------------------
//
// Kontrollerer om to værdier IKKE er ens.
//
// Eksempel:
// "hej" !== "farvel"
//
// Resultat:
// true
//
//
// Eksempel:
// "hej" !== "hej"
//
// Resultat:
// false
//
//
// ------------------------------------------------------------
// ${}  Indsæt værdier i tekst
// ------------------------------------------------------------
//
// Bruges sammen med template literals (backticks).
//
// Det gør det muligt at indsætte en variabel direkte
// inde i en string.
//
// Eksempel:
// let navn = "Anna";
//
// `Hej ${navn}`
//
// Resultat:
// "Hej Anna"
//
//
// Et andet eksempel:
// let alder = 25;
//
// `Jeg er ${alder} år gammel.`
//
// Resultat:
// "Jeg er 25 år gammel."
//
//
// ============================================================
//                         HUSK
// ============================================================
//
// Assignment operators:
//
// =
// +=
// -=
// *=
// /=
// %=
//
// De bruges primært til at TILDELE eller ÆNDRE værdier.
//
//
// String-relaterede operatorer:
//
// +
// +=
// ===
// !==
// ${}
//
// De bruges til at SAMMENKÆDE, SAMMENLIGNE eller
// INDSÆTTE tekst og værdier.
//
//
// ============================================================
//                    KORTE EKSEMPLER
// ============================================================
//
// let x = 10;
//
// x += 5;      // 15
// x -= 3;      // 12
// x *= 2;      // 24
// x /= 4;      // 6
// x %= 4;      // 2
//
//
// let navn = "Anna";
//
// let hilsen = "Hej " + navn;
// // "Hej Anna"
//
//
// hilsen += "!";
// // "Hej Anna!"
//
//
// navn === "Anna";
// // true
//
//
// navn !== "Peter";
// // true
//
//
// `Hej ${navn}!`;
// // "Hej Anna!"
//
//
// ============================================================
//                           NOTE
// ============================================================
//
// === og !== er egentlig COMPARISON OPERATORS
// (sammenligningsoperatorer).
//
// ${} er STRING INTERPOLATION og bruges i
// TEMPLATE LITERALS.
//
// De er derfor ikke alle teknisk set string operators,
// men de er relevante, når man arbejder med strings.*/