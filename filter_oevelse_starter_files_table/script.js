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

console.log(passengersMoreThanTwoSeatsVehicle);

showTheseVehicles(filter(button.dataset.filter));

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
  });
}

//funktion til at vise filtre


document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    tbodyPointer.innerHTML = ""; 
    showTheseVehicles(filter[button.dataset.filter]);
  });
});