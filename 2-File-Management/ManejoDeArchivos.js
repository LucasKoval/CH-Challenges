const fs = require('fs')

let prevId = 0

class Container {
  constructor(path) {
    this.path = path
    this.array = []
  }

  async save(object) {
    object.id = prevId + 1
    this.array.push(object)
    await fs.promises.writeFile(this.path, JSON.stringify(this.object))
    prevId++
  }
}

const container = new Container()

const testObject = {
  name: 'Test_Name',
  size: 50,
}

container.save(testObject)
