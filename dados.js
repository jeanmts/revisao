const fs = require("fs");

let lista;

function salvarGatos() {
    const json = JSON.stringify(lista, null, 2);
    fs.writeFileSync("bd.json", json);
}

try {
    lista = JSON.parse(fs.readFileSync("bd.json").toString())
} catch {
    lista = [
        {
            "id": 1,
            "nome": "pim",
            "especie": "felino",
            "humor": "preguica"
        },
        {
            "id": 2,
            "nome": "pipoca azedo",
            "especie": "canino",
            "humor": "eletrico"
        },
        {
            "id": 3,
            "nome": "xeninha",
            "especie": "canino",
            "humor": "brava"
        },
        {
            "id": 4,
            "nome": "puff",
            "especie": "felino",
            "humor": "misterioso"
        },
        {
            "id": 5,
            "nome": "chico",
            "especie": "felino",
            "humor": "surigato"
        },
        {
            "id": 6,
            "nome": "mione",
            "especie": "felino",
            "humor": "misteriosa"
        },
        {
            "id": 7,
            "nome": "casimiro",
            "especie": "ave",
            "humor": "fofo"
        },
        {
            "id": 8,
            "nome": "scarlet",
            "especie": "felino",
            "humor": "linda"
        },
        {
            "id": 9,
            "nome": "bruce",
            "especie": "felino",
            "humor": "engracadao"
        },
        {
            "id": 10,
            "nome": "bira",
            "especie": "felino",
            "humor": "gordao"
        },
        {
            "id": 11,
            "nome": "greg",
            "especie": "ave",
            "humor": "fofo"
        },
        {
            "id": 12,
            "nome": "apolo",
            "especie": "felino",
            "humor": "praia"
        },
        {
            "id": 13,
            "nome": "sheik",
            "especie": "canino",
            "humor": "gigante"
        },
        {
            "id": 14,
            "nome": "nina",
            "especie": "canino",
            "humor": "ao contrario"
        },
        {
            "id": 15,
            "nome": "alecrim",
            "especie": "felino",
            "humor": "amarelao"
        }
    ]
}

module.exports = { lista, salvarGatos};