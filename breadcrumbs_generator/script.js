const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector(".generate").addEventListener("click", addBreadCrymbsToPage);

function addBreadCrymbsToPage() {
    console.log("Tilføj Krummer");
    document.querySelector("body").innerHTML = generateBreadCrumbsPath();
}

//function generateBreadCrumbsPath() {
// return '<a href="somelink" target="_blank"></a>';
//}

function generateBreadCrumbsPath(array) {
    let string = ``;
    bc.forEach((item, i) => {
        string += `<a href="">${item.name}</a> `;
    console.log(item);
    console.log(i);
    });  
    return string; 
}

generateBreadCrumbsPath(bc);

