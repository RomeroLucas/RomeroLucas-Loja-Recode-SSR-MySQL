//IMPORTS
const express = require('express')
const app = express()
const conn = require('./conexao.js')
const cors = require('cors')

// CONFIGS
app.use(express.json())
app.use(cors())
app.use(express.static('./build'))


// ROTAS
const jogos = require('./routes/jogos')
app.use(jogos)

const port = proccess.env.PORT || 4000
app.listen(port, ()=> {
    console.log("Servidor ok: http://localhost:4000/")
})





