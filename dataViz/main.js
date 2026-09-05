//fetch følgende i et interval (10 sek) https://kea-alt-del.dk/kata-distortion/
//visualisere attributen inQueue4
//lad tallet vokse og falde tilbage

//hints: brug animationend eller transitionend til at fjerne class / data-attribut'

console.log(fetch('https://kea-alt-del.dk/kata-distortion/'))

let oldValue;

async function getData() {
  const response = await fetch(
    "https://kea-alt-del.dk/kata-distortion/"
  );

  const data = await response.json();

  const value = data.inQueue;

  document.querySelector("#number").textContent = value;

  // Størrelsen på cirklen
  document
    .querySelector("#circle")
    .setAttribute("r", 30 + value);

  // Hvis tallet har ændret sig
  if (oldValue !== undefined && value !== oldValue) {
    const circle = document.querySelector("#circle");

    circle.classList.add("changed");

    circle.addEventListener(
      "animationend",
      () => {
        circle.classList.remove("changed");
      },
      { once: true }
    );
  }

  oldValue = value;
}

getData();

setInterval(getData, 10000);
