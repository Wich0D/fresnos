const express = require("express");
const path = require("path");
const app = express();

// Middleware para datos JSON
app.use(express.json());

// Ejemplo de una ruta API
app.get("/api/example", (req, res) => {
  res.json({ message: "¡Hola desde la API!" });
});

// Servir archivos estáticos del frontend en producción
if (process.env.NODE_ENV === "production") {
  // Define la carpeta de build de React como estática
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Manejar todas las rutas no definidas con el archivo index.html de React
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
