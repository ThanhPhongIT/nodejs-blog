const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000;
const handlebars = require('express-handlebars')

//HTTP local
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/tin-tuc', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})