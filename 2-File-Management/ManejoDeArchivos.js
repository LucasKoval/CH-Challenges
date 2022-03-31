const fs = require('fs')

let prevId = 0

class Container {
  constructor(path) {
    this.path = path
    this.array = []
  }

  async save(object) {
    object.id = prevId + 1
    prevId++
    this.array.push(object)
    await fs.promises.writeFile(`${this.path}.json`, JSON.stringify(this.array))
    // await fs.promises.writeFile(`${this.path}.txt`, JSON.stringify(this.array))
    console.log('%c⧭ id', 'color: #00ff03;', object.id)
    return object.id
  }

  async getById(number) {
    const jsonData = JSON.parse(await fs.promises.readFile(`${this.path}.json`, 'utf-8'))
    // console.log('%c⧭ jsonData', 'color: #ff6c61;', jsonData)

    // const parsedData = await JSON.parse(jsonData)
    // console.log('%c⧭ parsedData', 'color: #ff6c61;', parsedData)

    const productFound = jsonData.find((object) => object.id === number)
    // console.log('%c⧭ found', 'color: #ff6c61;', found)

    if (!productFound) return null
    return productFound
  }

  async getAll() {
    const jsonData = JSON.parse(await fs.promises.readFile(`${this.path}.json`, 'utf-8'))
    console.log('%c⧭ jsonData', 'color: #ff6c61;', jsonData)
  }

  async deleteById(number) {
    const jsonData = JSON.parse(await fs.promises.readFile(`${this.path}.json`, 'utf-8'))
    // console.log('%c⧭ jsonData', 'color: #ff6c61;', jsonData)

    const productList = jsonData.filter((object) => object.id !== number)
    // console.log('%c⧭ productList', 'color: #ff6c61;', productList)

    return productList
  }

  async deleteAll() {
    this.array = []
  }
}

const container = new Container('test')

const product_1 = {
  title: 'Escuadra',
  price: 123.45,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
}

const product_2 = {
  title: 'Calculadora',
  price: 234.56,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
}

const product_3 = {
  title: 'Globo Terráqueo',
  price: 345.67,
  thumbnail:
    'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
}

container.save(product_1)
container.save(product_2)
container.save(product_3)

//container.getById(2)

container.getAll()
