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
