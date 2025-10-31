// Manejo del DOM (Document Object Model)

console.log(document);

// - Selección de elementos

// Métodos básicos (selector HTML)

const myElementById = document.getElementById("id");

const myElementsByClass = document.getElementsByClassName("class");

const myElementsByTag = document.getElementsByTagName("tag");

// Métodos más modernos (selector CSS)

document.querySelector(".paragraph");
document.querySelectorAll(".paragraph");

// - Manipulación de elementos

const title = document.getElementById("title");
title.textContent = "Hola Mundo";

const container = document.querySelector(".container");
container.innerHTML = "<p>Parrafo</p>";

// - Modificación de atributos

const link = document.querySelector("a");
const url = link.getAttribute("href");

// Establecimiento del atributo
link.setAttribute("href", "https://ejemplo.com");

// Comprobación de atributo
const hasTarget = link.hasAttribute("target");

// Eliminación de atributo
link.removeAttribute("target");

// - Interacción con clases CSS

const box = document.querySelector(".box");
box.classList.add("selected");
box.classList.remove("box");
box.classList.toggle("selected");

const button = document.querySelector("button");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px";

// - Creación y eliminación de elementos

// Creación
const newParagraph = document.createElement("p");
newParagraph.textContent = "Nuevo párrafo";
newParagraph.style.padding = "8px";

container.appendChild(newParagraph);

const itemsList = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "Nuevo ítem";

// Inserción en una posición específica
const secondItem = itemsList.children[1];
itemsList.insertBefore(newItem, secondItem);

itemsList.append(newItem);
itemsList.prepend(newItem);
secondItem.before(newItem);
secondItem.after(newItem);

// Eliminación

newParagraph.remove();

// Eliminación usando el padre
const parent = newParagraph.parentElement;
parent.removeChild(newParagraph);
