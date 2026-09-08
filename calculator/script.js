
// ============================================================
//                         CALCULATOR
// ============================================================


// Vi henter inputfeltet fra HTML
const input = document.getElementById("inputBox");


// Vi henter alle knapper fra HTML
const buttons = document.querySelectorAll("button");


// Tom string som skal indeholde det,
// brugeren skriver på lommeregneren
let string = "";


// Vi laver NodeList'en med knapper om til et almindeligt array
const arr = Array.from(buttons);


// ============================================================
//                      KNAPPER / EVENTS
// ============================================================


// Vi gennemgår alle knapper i arrayet
arr.forEach(button => {

    // Vi tilføjer et click-event til hver knap
    button.addEventListener("click", e => {

        // Vi gemmer teksten fra den knap,
        // som brugeren har trykket på
        const value = e.target.innerHTML;


        // ====================================================
        //                         AC
        // ====================================================

        // Hvis brugeren trykker på "AC",
        // nulstiller vi calculatoren

        if (value === "AC") {

            string = "";

            input.value = "";


        // ====================================================
        //                        DEL
        // ====================================================

        // Hvis brugeren trykker på "DEL",
        // fjerner vi det sidste tegn fra string

        } else if (value === "DEL") {

            string = string.substring(0, string.length - 1);

            input.value = string;


        // ====================================================
        //                          %
        // ====================================================

        // Hvis brugeren trykker på "%",
        // omregner vi det sidste tal til procent

        } else if (value === "%") {

            // Vi finder det sidste tal i string
            const match = string.match(/(\d+\.?\d*)$/);

            // Hvis der findes et tal
            if (match) {

                const number = parseFloat(match[0]);

                // Omregner tallet til procent
                const percentage = number / 100;

                // Erstatter tallet med procentværdien
                string = string.substring(
                    0,
                    string.length - match[0].length
                ) + percentage;

                input.value = string;
            }


        // ====================================================
        //                       DIVISION
        // ====================================================

        // Hvis brugeren trykker på "\",
        // skal JavaScript bruge "/"
        // fordi "/" er divisionsoperatoren i JavaScript

        } else if (value === "\\") {

            string += "/";

            input.value = string;


        // ====================================================
        //                          =
        // ====================================================

        // Hvis brugeren trykker på "=",
        // beregner vi resultatet

        } else if (value === "=") {

            try {

                // eval() beregner det matematiske udtryk
                string = eval(string);

                // Viser resultatet i inputfeltet
                input.value = string;

            } catch {

                // Hvis udtrykket ikke kan beregnes,
                // viser vi "Error"

                input.value = "Error";

                string = "";
            }


        // ====================================================
        //                    TAL / OPERATORER
        // ====================================================

        // Hvis knappen ikke er AC, DEL, %, \ eller =,
        // tilføjer vi knappens værdi til string

        } else {

            string += value;

            input.value = string;
        }

    });

});