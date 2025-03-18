const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Puerto configurable por variable de entorno

app.get("/", (req, res) => {
  res.send("🚀 Hello World desde Kubernetes y Jenkins! 🎉");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
