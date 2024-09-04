import odinImage from "./resources/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg"
import spaghetthiImage from "./resources/eaters-collective-ddZYOtZUnBk-unsplash.jpg";
import pizza from "./resources/thomas-tucker-MNtag_eXMKw-unsplash.jpg";

export function firstPage() {
const contentContainer = document.querySelector("#content");
const divHero = document.createElement("div");
divHero.classList.add("heroBanner");
const divText = document.createElement("div");
divText.classList.add("heroText");

const headerHero = document.createElement("h1");
headerHero.textContent = "Speisekarte";
divText.appendChild(headerHero);

divHero.appendChild(divText);

contentContainer.appendChild(divHero);

const menuReel = document.createElement("div");
menuReel.classList.add("menureel");

const menu1 = document.createElement("div");
menu1.style.backgroundImage = `url(${odinImage})`; 
menu1.classList.add("menu");

const textInfo1 = document.createElement("div");
textInfo1.classList.add("textInfo");
textInfo1.textContent = "Imagine some info here :)";
menu1.addEventListener("mouseenter", () => textInfo1.style.display = "inline");
menu1.addEventListener("mouseleave", () => textInfo1.style.display = "none");

const menu2 = document.createElement("div");
menu2.style.backgroundImage = `url(${spaghetthiImage})`;
menu2.classList.add("menu");


const textInfo2 = document.createElement("div");
textInfo2.classList.add("textInfo");
textInfo2.textContent = "Imagine some info here :)";

menu2.addEventListener("mouseenter", () => textInfo2.style.display = "inline");
menu2.addEventListener("mouseleave", () => textInfo2.style.display = "none");

const menu3 = document.createElement("div");
menu3.style.backgroundImage = `url(${pizza})`;
menu3.classList.add("menu");

const textInfo3 = document.createElement("div");
textInfo3.textContent = "Imagine some info here :)";
textInfo3.classList.add("textInfo");

menu3.addEventListener("mouseenter", () => textInfo3.style.display = "inline");
menu3.addEventListener("mouseleave", () => textInfo3.style.display = "none");


menu1.appendChild(textInfo1);
menu2.appendChild(textInfo2);
menu3.appendChild(textInfo3);


menuReel.appendChild(menu1);
menuReel.appendChild(menu2);
menuReel.appendChild(menu3);

contentContainer.appendChild(menuReel);


}

// <div class="menureel">
// <div class="menu">
//     <div class="textInfo">This is a price or smth</div>
// </div>
// <div class="menu"></div>
// <div class="menu"></div>
// <div class="menu"></div>
// </div>
