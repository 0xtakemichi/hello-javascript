// Programación Asíncrona

// Código sincrono
console.log("Inicio");
for (let i = 0; i < 1000000000; i++) {}
console.log("Fin");

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código Asíncrono

// - Callbacks

console.log("Start");
setTimeout(() => console.log("Ejecución de setTimeout"), 2000);
console.log("End");

// - Problemas: Callback Hell

function step1(callback) {
  setTimeout(() => {
    console.log("Paso 1 completado");
    callback();
  }, 1000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Paso 2 completado");
    callback();
  }, 1000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Paso 3 completado");
    callback();
  }, 1000);
}
step1(() => {
  step2(() => {
    step3(() => {
      console.log("Todos los pasos completados");
    });
  });
});

// - Promesas

const promise = new Promise((resolve, reject) => {
  setInterval(() => {
    const ok = true;
    if (ok) {
      resolve("Todo bien");
    } else {
      reject("Todo mal");
    }
  }, 4000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Fin del programa");

// - Encadenamiento de promesas

function step1Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 1 con promesa completado");
      resolve();
    }, 1000);
  });
}
function step2Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 2 con promesa completado");
      resolve();
    }, 1000);
  });
}
function step3Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Paso 3 con promesa completado");
      resolve();
    }, 1000);
  });
}
step1Promise()
  .then(() => step2Promise())
  .then(() => step3Promise())
  .then(() => {
    console.log("Todos los pasos completados con promesas");
  });

// - Async/Await

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("Inicio del proceso");
  await wait(5000);
  console.log("Fin del proceso");
}

process();
