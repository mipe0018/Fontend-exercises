const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
const passengersMoreThanTwoSeatsVehicle = vehicles.filter((vehicle) => vehicle.passengers > 2)
const electricOwnedByJonasVehicle = vehicles.filter((vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas");
const ryebreadVehicle = vehicles.filter((vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1)


//console.log(ryebreadVehicle)

//hvis der er flere ting der skal spille ind, benyttes && fx hvor passagere er højere end 1 og kører på rugbrød eller lignende. fremstil konstanter for alle de regler der skal spille ind.

showTheseVehicles(vehicles);
 //electricVehicles - viser dem der er electric //gasolineVehicle - viser dem med benzin


function showTheseVehicles(arr) {

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ? each.type : ""}</td>
  <td>${each.fuel ? each.fuel : ""}</td>
  <td>${each.passengers ? each.passengers : ""}</td> 
  <td>${each.stops ? each.stops : ""}</td> 
  <td>${each.ownedBy ? each.ownedBy : ""}</td>
  <td>${each.isElectric?"√":"χ"}</td>
  <td>${each.isTandem?"√":"χ"}</td>
</tr>`;
return true;
  });
} //under stops - vis hvis der er og ellers retuner en tom streng. 


document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    tbodyPointer.innerHTML = ""; 
    showTheseVehicles(filter[button.dataset.filter]);
  });
});


//husk at fremhæv knap hvis denne er trykket på så man kan se hvilke filtrereinger der gælder. 

//document.querySelectorAll("button").forEach((button) => {

  //button.addEventListener("click", {} => {
    //document.querySelectorAll("button").forEach((button) => {
    //button.classList.remove("fremHaevet");
   // )};

    //button.classList.add("fremHaevet");
    //tbodyPointer.innerHTML = ""; 
    //showTheseVehicles(filters(button.dataset.filter));
  //});
//});


//sæt class fremHaevet på vis alle knappen for at den fra start af markere "vis alle"-knappen. 


//en løsning på at få en knap fremhævet ved at trykke på den:

//let activeButton; (skal stå øverst står her som eksempel så jeg kan huske den skal bruges til at lave fremhævning på den aktive knap.)

//det næste kan sættes ind i button.addEventListener oppe over for at fremhæve den aktive knap.
 // if(activeButton !== undefinded) {
 //activeButton.classList.remove("fremhaevet"); //fremhævet ligger i stylingen. 
 //}
  
  //activeButton = button; 
//

