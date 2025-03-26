// express
const express = require('express')
const app = express()
const port = 3000

// importazione file menu
const menu = require('./menu.js')


app.use(express.static('pubblic'))

app.get('/menu', (req,res)=>{
    res.json(menu)
})


app.get('/', (req,res)=>{
    res.send('Server del mio blog')
})


app.listen(port,() =>{
    console.log(`Sono in ascolto sulla porta ${port}`)
})