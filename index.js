const express = require("express");
const app = express();

app.get("/mãe", (req, res )=> {
    let usuario = {
                    nome: "Carolina Peres",
                    disciplina : "Topicos Especiais",
                    curso : "ADS"
    }
    res.send(usuario)
}) ;

app.get("/familia", (req, res )=> {
    let professores  = [ {
                    nome: "Marcelo Biczyk",
                    disciplina : "Banco de dados",
                    curso : "ADS"
    },
    {
        nome: "Ozzy Peres Biczyk",
        disciplina : "O cãozinho",
        curso : "ADS"
}]
    res.send(professores);
}) ;


app.listen(3000, () => {
    console.log("funfando...");
})
