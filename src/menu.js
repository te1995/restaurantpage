import odinImage from "./resources/odiseo-castrejon-1SPu0KT-Ejg-unsplash.jpg"
import spaghetthiImage from "./resources/eaters-collective-ddZYOtZUnBk-unsplash.jpg";
import pizza from "./resources/thomas-tucker-MNtag_eXMKw-unsplash.jpg";

const menuItems = function(name, price, image) {

    let _name = name;
    let _price = price;
    let _image = image;

    function getName(){
        return _name;
    }

    function getPrice(){
        return _price;
    }

    function setPrice(price){
        _price = price;
    }

    function getImage() {
        return _image;
    }

    return { getName, getPrice, setPrice, getImage};
}

let products = [
    menuItems("Pizza", 8.59, pizza),
    menuItems("Pasta", 9.59, spaghetthiImage),
    menuItems("Vitello Tonato", 6.59, odinImage),
    ];



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

products.forEach(item => {
    const menu = document.createElement("div");
    menu.style.backgroundImage = `url(${item.getImage()})`
    menu.classList.add("menu");
    const textInfo1 = document.createElement("div");
    textInfo1.classList.add("textInfo");
    textInfo1.textContent = item.getName() +  " " + item.getPrice();
    menu.addEventListener("mouseenter", () => textInfo1.style.display = "inline");
    menu.addEventListener("mouseleave", () => textInfo1.style.display = "none");
    menu.appendChild(textInfo1);
    menuReel.appendChild(menu);

});

contentContainer.appendChild(menuReel);


}

