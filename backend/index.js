require('dotenv').config();
const express = require("express");
const app = express();
const sequelize = require("./database/database.js"); // Sequelize PostgreSQL
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/categorias", require("./routes/categorias.js"));
app.use("/ordenes", require("./routes/ordenes.js"));
app.use("/products", require("./routes/productos.js"));
app.use("/users", require("./routes/usuarios.js"));

// Ruta de prueba
app.get("/", (req, res) => res.send("Servidor funcionando ✅"));

// Inicio del servidor
async function start() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a PostgreSQL");

    await sequelize.sync(); // crea tablas si no existen
    console.log("✅ Tablas sincronizadas");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Servidor corriendo en puerto " + PORT));

  } catch (err) {
    console.error("❌ Error al iniciar servidor:", err);
  }
}

start();
