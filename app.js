//Usando objeto express
const express = require('express')
//App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000// Localhost: 3000

//localhost:3000 Path inicial, respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World explores")
})
//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send('Bienvenidos a launchX')
})

// Respondiendo texto
//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})