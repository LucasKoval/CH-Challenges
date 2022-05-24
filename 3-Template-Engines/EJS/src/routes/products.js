//----------* REQUIRE'S *----------//
const { Router } = require('express')
const Container = require('../classes/fileManagement')
const router = new Router()
const database = new Container('products')

//----------* PRODUCTS ROUTES *----------//
// Add Product Form
router.get('/', (req, res) => {
  res.render('index')
})

// Get All Products
router.get('/productos', async (req, res) => {
  try {
    const allProducts = await database.getAll()
    res.render('products', { allProducts })
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
})

// Add New Product
router.post('/productos', async (req, res) => {
  try {
    const allProducts = await database.getAll()
    const noImage =
      'https://cdn4.iconfinder.com/data/icons/basic-ui-element-flat-style/512/Basic_UI_Elements_-_2.3_-_Flat_Style_-_36-02-64.png'
    let lastID = 0

    if (allProducts.length) {
      lastID = allProducts[allProducts.length - 1].id
    }

    const newProduct = {
      id: lastID + 1,
      title: req.body.title ? req.body.title : 'No Title',
      price: req.body.price ? req.body.price : 0,
      thumbnail: req.body.thumbnail ? req.body.thumbnail : noImage,
    }

    await database.add(newProduct)
    res.redirect('/')
  } catch (error) {
    console.log(`ERROR: ${error}`)
  }
})

//----------* EXPORTS ROUTER *----------//
module.exports = router
