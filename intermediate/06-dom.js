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
