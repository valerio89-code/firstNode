const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/users', (req, res) => {
    res.send([{ nome: "valerio", cognome: "puddu" }])
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.get('/elenco', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/elenco.html"))
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})