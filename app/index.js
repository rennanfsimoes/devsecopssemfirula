const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("DevOps sem Firula rodando com GitOps + DevSecOps!"));

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));