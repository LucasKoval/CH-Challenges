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
    await fs.promises.writeFile(this.path, JSON.stringify(this.array))
    console.log('%c⧭ id', 'color: #00ff03;', object.id)
    return object.id
  }

  async getById(number) {
    const fileData = await fs.promises.readFile(this.path, 'utf-8')
    console.log('%c⧭ fileData', 'color: #ff6c61;', fileData)
    const found = fileData.find((object) => object.id === 2)
    console.log('%c⧭ found', 'color: #ff6c61;', found)
  }

  async getAll() {}

  async deleteById(number) {}

  async deleteAll() {}
}

const container = new Container('test.txt')

const testObject_1 = {
  name: 'Test_Name',
  size: 7,
}

const testObject_2 = {
  name: 'Test_Name',
  size: 10,
}

const testObject_3 = {
  name: 'Test_Name',
  size: 21,
}

container.save(testObject_1)
container.save(testObject_2)
container.save(testObject_3)

container.getById(2)
