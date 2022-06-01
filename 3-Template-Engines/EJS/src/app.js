//----------* REQUIRE'S *----------//
const express = require('express')
const path = require('path')
const productsRouter = require('./routes/products')
const app = express()

app.set('views', 'src/views')
app.set('view engine', 'ejs')

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
