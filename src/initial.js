/* <div class="heroBanner">
<div class="heroText">
    <h1>Great restaurant</h1>
    <p>Try our new breakfast restaurant.</p>
</div>
</div>

<div class="containerText">
<div class="sometext">
    <h2>HANDWERKLICH, LEIDENSCHAFTLICH, AUTHENTISCH – IHR RESTAURANT IN MURNAU</h2>
    <p>Was zeichnet richtig gutes Essen aus? Es muss köstlich schmecken, gesund und bekömmlich sollte es sein, schön angerichtet und freundlich serviert werden. Aber ist das genug? Nicht für uns in der neuen Pfistermühle – Dem Restaurant im Zentrum von München, das Handwerkskunst, Leidenschaft und Echtheit miteinander vereint.</p>
</div>
</div> */

export function setInitialLoad() {
const contentContainer = document.querySelector("#content");
const divHero = document.createElement("div");
divHero.classList.add("heroBanner");
const divText = document.createElement("div");
divText.classList.add("heroText");
const divContainerText = document.createElement("div");
divContainerText.classList.add("containerText");
const divTextInfo = document.createElement("div");
divTextInfo.classList.add("sometext");

const headerHero = document.createElement("h1");
headerHero.textContent = "Great Restaurant";
divText.appendChild(headerHero);
const headerParagraph = document.createElement("p");
headerParagraph.textContent = "Try our new breakfast restaurant";
divText.appendChild(headerParagraph);

divHero.appendChild(divText);


const h2Element = document.createElement("h2"); 
h2Element.textContent = "HANDWERKLICH, LEIDENSCHAFTLICH, AUTHENTISCH – IHR RESTAURANT IN MURNAU";
divTextInfo.appendChild(h2Element);
const pDivInfo = document.createElement("p");
pDivInfo.textContent = "Was zeichnet gutes Essen aus? Es muss gut schmecken, gesund und bekömmlich sollte es sein, schön angerichtet und freundlich serviert werden. Aber ist das genug? Nicht für uns in dem neuen Brunch Restaurant – Das Restaurant im idyllischen Murnau, das Tradition, Leidenschaft und echtes Handwerk miteinander vereint."
divTextInfo.appendChild(pDivInfo);


divContainerText.appendChild(divTextInfo);

contentContainer.appendChild(divHero);
contentContainer.appendChild(divContainerText);

}


