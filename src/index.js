import "./styles.css";
import { setInitialLoad } from "./initial.js";
import {firstPage} from "./menu.js";

setInitialLoad();


const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    removeAllChildren(contentDiv);
    firstPage();

});

const homeButton = document.querySelector(".homeButton");
homeButton.addEventListener("click", () => {
    const contentDiv = document.querySelector("#content");
    removeAllChildren(contentDiv);
    setInitialLoad();

});

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

