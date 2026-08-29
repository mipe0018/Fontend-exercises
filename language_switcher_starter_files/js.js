const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

const languageSelect = document.querySelector("select");
let boat = document.getElementById("boat");
let robot = document.getElementById("robot");


languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if(language == "da") {
    boat.innerText = texts.da.texts[0].text;
    robot.innerText = texts.da.texts[1].text;

   // console.log(texts.da.texts[0].text)
   // console.log(texts.da.texts[1].text)
  }else if(language == "de") {
    boat.innerText = texts.de.texts[0].text;
    robot.innerText = texts.de.texts[1].text;
   // console.log(texts.de.texts[0].text)
    //console.log(texts.de.texts[1].text)
  }else if (language === "") {
        boat.innerText = "UDSKIFTES";
        robot.innerText = "UDSKIFTES";
    }
}



//
//console.log(document.querySelector(elm));




//sti til "båden", "das bot" og location
//console.log(texts.da.texts[0].text)
//console.log(texts.de.texts[0].text)
//console.log(texts.da.texts[0].location)

//