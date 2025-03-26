const express = require('express')
const app = express()
const port = 2200




app.get('/', (req,res)=>{
    res.send('Server del mio blog')
})


app.listen(port,() =>{
    console.log(`Sono in ascolto sulla porta ${port}`)
})