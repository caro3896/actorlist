//Creating constants and variables
const url = "../actors.json";
let actors;
const actorList = document.querySelector("#actors");
const actorsTemplate = document.querySelector("#actorlist");
const popup = document.querySelector("#popup");
const popupTemplate = document.querySelector("#info");

// See if DOM is loaded before calling a function
window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("DOM is loaded");
   getData(); 
}

// Getting json data
async function getData() {
    console.log("Getting data from json");
    const respons = await fetch(url);
    actors = await respons.json();
    showActors();
}

// Show actors by name
function showActors(){
    console.log("Actors are displayed", actors)
actors.forEach(actor => {
    const clone = actorsTemplate.cloneNode(true).content;
    clone.querySelector(".name").textContent = actor.fullname;
    clone.querySelector(".name").addEventListener("click", () => showDetails(actor));
    actorList.appendChild(clone);
});
}

const overlay = document.querySelector("#overlay");

function showDetails(actor){
    console.log("Details clicked")
    const clone = popupTemplate.cloneNode(true).content;
    popup.textContent="";
    clone.querySelector(".fullname").textContent = actor.fullname;
    clone.querySelector(".movie").textContent = `Featured in ${actor.movie}`;
    popup.classList.add('active');
    overlay.classList.add('active');
    clone.querySelector("#close").addEventListener("click", closeDetails);
    popup.appendChild(clone);
}

function closeDetails(){
    popup.classList.remove('active');
    overlay.classList.remove('active');
}

getData();