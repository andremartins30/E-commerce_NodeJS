const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"))

const products = [
    { 
        id:0,
        img: "/assets/financeiro.jpg",
        title: "Controle Financeiro",
        price: 299.99
    },

    {
        id:1,
        img: "/assets/estoque.jpg",
        title: "Controle de Estoque",
        price: 169.99
    },
    {
        id:2,
        img: "/assets/compra.jpg",
        title:"Gestão de Compra e Venda",
        price: 249.99
    },
]


app.get('/', (req, res) => {
    res.render("home", {products})
})

app.get("/product/:id", (req, res) => {

    res.render("product", {product: products[req.params.id]})
})


app.listen(3000, () => {
 console.log('App rodando no http://localhost:3000')
})