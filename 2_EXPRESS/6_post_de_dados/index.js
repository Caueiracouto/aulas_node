const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.get('/users/cadastrar', (req, res) => {
    res.sendFile(`${caminho}/usuariosform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
})
app.post('/users/save', (req, res)=>{
    console.log(req.body.name)

})

    console.log(`Estamos buscando pelo usuario: ${id}`)
    res.sendFile(`${caminho}/usuarios.html`)
 

app.get ('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.listen(3000)