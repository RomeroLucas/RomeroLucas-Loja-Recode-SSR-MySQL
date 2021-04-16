const express = require('express')
const conn = require('../conexao')
const jogos = express()


// Exibe todos os jogos
jogos.get('/prod', (req, res) => {
    conn.query('select * from produtos', (error, result) => {
        res.json(result)
    })
})


//Busca personalizada por nome ou id do jogo
jogos.get('/prod/id=:id/nome=:nome', (req, res) => {
    let dados = {
        id : req.params.id,
        nome : req.params.nome
    }
    
    conn.query(`select * from produtos where nome="${dados.nome}" or id=${dados.id}`, (error, result) => {
        res.json(result)
    })
})


//Cadastro de jogos
jogos.post('/', (req, res, next) => {
    let dados = {
            nome : req.body.nome,
            img : req.body.img,
            valor : req.body.valor,
            categoria : req.body.categoria,
            localimg : req.body.localimg
        }

    conn.query('insert into produtos set?', dados, ()=> {
        res.json({log : 'produto cadastrado com sucesso!'})
    })
})


//Exclusão de jogos
jogos.delete('/id=:id', (req, res, next) => {
    let jogo =  req.params.id

    conn.query(`delete from produtos where id=${jogo}`, () => {
        res.json({mensagem : 'jogo excluído com sucesso!'})
    })
})


//Alterar dados de um jogo
jogos.put("/:id", (req, res) => {
    let dados = {
            id : req.params.id,
            nome : req.body.nome
        }
    
    conn.query(`UPDATE produtos SET nome='${dados.nome}' WHERE id=${dados.id};`, () => {
        return res.json({msg : 'jogo atualizado com sucesso!'})
    })
})


module.exports = jogos

