/*
* DOM - Crear e insertar elementos

  ~ Crear un elemento:              document.createElement(element)
  ~ Escribir texto en un elemento:  element.textContent = texto
  ~ Escribir HTML en un elemento:   element.innerHTML = código HTML
  ! innerText

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
 */

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

// days.map((dia) => daysList.appendChild(document.createElement("LI")));

/* const itemList = document.createElement("LI");
itemList.textContent = "Lunes";
daysList.appendChild(itemList); */

// title.innerHTML = "DOM - <span>Crear e insertar elementos I<span>";

/* for (const day of days) {
    const itemList = document.createElement("LI");
    itemList.textContent = day;
    daysList.appendChild(itemList);
    // fragment.appendChild(itemList)
} */

/* //cada vez que insertar cod html al DOM y redibuja el Arbol
for (const day of days) {
    daysList.innerHTML += `<li> ${day} </li>`;
} */

const fragment = document.createDocumentFragment();

for (const day of days) {
  const selectItem = document.createElement("LI");
  selectItem.textContent = day;
  fragment.appendChild(selectItem);
} //ya se preparo el fragmento
daysList.appendChild(fragment);

for (const day of days) {
  const selectItem = document.createElement("OPTION");
  selectItem.setAttribute("value", day.toLowerCase());
  selectItem.textContent = day;
  fragment.appendChild(selectItem);
}
selectDays.appendChild(fragment);
