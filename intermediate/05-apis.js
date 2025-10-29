// Manejo de APIs

// - APIs REST (HTTP + URLs + JSON)

// Métodos HTTP
// - GET
// - POST
// - PUT
// - DELETE

// Códigos de respiesta HTTP
// 2xx - Lado del servidor
// 200 - OK
// 201 - Created
// 204 - No Content
// 4xx - Lado del cliente
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 404 - Not Found
// 5xx - Lado del servidor
// 500 - Internal Server Error

// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Transforma la respuesta a JSON
    return response.json();
  })
  .then((data) => {
    // Procesa los datos
    console.log(data);
  })
  .catch((error) => {
    // Maneja el error
    console.log(error);
  });

// Uso de Async/Await

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPosts();

// Solicitud POST

async function createPost() {
  try {
    const newPost = {
      userId: 1,
      title: "Este es el titulo",
      body: "Este es el cuerpo",
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

createPost();

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/icecream")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Métodos HTTP adicionales

// - PATCH
// - OPTIONS
async function partialPostUpdate() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/9",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "Este es el nuevo título" }),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

partialPostUpdate();

// Autenticación mediante API Key

async function getWeather(city) {
  const apikey = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getWeather("Santiago");

// Otros métodos de Autenticación y Autorización
// - Bearer Tokens
// - JWT

// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs

async function getPokemon(pokemon) {
  // https://pokeapi.co
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Habilidades de ${data.name}`);
    data.abilities.forEach((ability) => {
      console.log(ability.ability.name);
    });
  } catch (error) {
    console.log("Error", error);
  }
}

getPokemon("pikachu");

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
