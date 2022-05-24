//----------* REQUIRE'S *----------//
const path = require('path')
const express = require('express')
const engine = require('express-handlebars').engine
const productsRouter = require('./routes/products')

const app = express()
const handlebarsConfig = {
  extname: '.hbs',
  defaultLayout: 'index.hbs',
}

app.engine('.hbs', engine(handlebarsConfig))
app.set('view engine', '.hbs')
app.set('views', 'src/views')

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//----------* ROUTES *----------//
app.use('/', productsRouter)

//----------* SERVER CONFIGURATION *----------//
const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))
