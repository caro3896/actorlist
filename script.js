const url = "../actors.json";
let actors;
const dest = document.querySelector("#actors");
const template = document.querySelector("template").content;

window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("DOM is loaded");
   hentData(); 
}

async function hentData() {
    console.log("Getting data from json");
    const respons = await fetch(url);
    actors = await respons.json();
    showActors();
}

function showActors(){
    console.log("Actors are displayed", actors)
actors.forEach(actor => {
    console.log("Actor is displayed");
    const clone = template.cloneNode(true);
    clone.querySelector(".name").textContent = actor.fullname;
    clone.querySelector(".movie").textContent = actor.movie;
    dest.appendChild(clone);
});
}
