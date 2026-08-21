const beloebInput = document.querySelector("#beloeb")
const beregnKnap = document.querySelector("#beregn")
const resultat = document.querySelector("#resultat")
const momsResultat = document.querySelector("#momsResultat")

//

beregnKnap.addEventListener("click", momsBeregner);

function momsBeregner() {
    
    const beloeb = Number(beloebInput.value)

    const moms = beloeb * 0.25;
    const total = beloeb + moms;

    momsResultat.textContent = `Moms udgør: ${moms.toFixed(2)} kr.`;
     resultat.textContent = `Beløb inklusiv moms: ${total.toFixed(2)} kr.`;
     
}

console.log(resultat);