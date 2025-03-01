//Express una librería que permite hacer API's mucho más rápido. Crear los endpoint. Con node.JS crear el servidor

const express = require("express"); // Forma clásica de cargar módulos. Iniciar express

const app = express(); // app va a tener una instacia de express

app.use(express.json()); // Que la aplicación siempre se comunique con JSON / Para el request http

let users = []; // simular datos que es ejor guardarlo en un JSON. Pero no persiste en memoria, por eso es mejor en JSON

app.get("/quejas-y-reclamos", (req, res) => {
  // así se crea un endpoint. ruta => parámetros
  res.send(users);
  // res.send("Respondiendo quejas y reclamos");
});

//req.query -> traer algo desde los query params

app.post("/solicitar-productos", (req, res) => {
  const { name, age, job } = req.body; // Obtener lo que hay en el JSON por medio de una desestructuración

  users.push({ id: users.length + 1, name, age, job });

  // res.send(`Hola ${name}, ${age}, ${job}`);
  res.send(users);
});

 app.put("/solicitar-productos/:id", (req, res) => {   //El id es obligatorio para que carge el endpoint
  const { id } = req.params;
  const { name, age, job } = req.body;

  const newArray = users.map((item) => {
    if (item.id == id) {
      return {
        ...item,
        name,
        job,
        age,
      };
    }
    return item;
  });
  // const findId = users.find((item) => item.id === parseInt(id));
  users = newArray;
  res.send("Array updated");
});

app.listen(5050); // este servidor va a funcionar en el puerto 5050
