class User {
  constructor(name, surname, books, pets) {
    this.name = name
    this.surname = surname
    this.books = books
    this.pets = pets
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }

  addPet(petName) {
    if (typeof petName === 'string') {
      console.log('Pet added successfully!')
      return this.pets.push(petName)
    } else {
      throw new Error('Debe ingresar el nombre de una mascota.')
    }
  }

  countPets() {
    return this.pets.length
  }

  addBook(name, author) {
    if (typeof name === 'string' && typeof author === 'string') {
      console.log('Book added successfully!')
      return this.books.push({ name: name, author: author })
    } else {
      throw new Error('Los datos ingresados son incorrectos.')
    }
  }

  getBookNames() {
    let bookList = []
    for (const book of this.books) {
      bookList.push(book.name)
    }
    return bookList
  }
}

const user = new User(
  'Lucas',
  'Koval',
  [
    { name: 'Dracula', author: 'Bram Stoker' },
    { name: 'El Resplandor', author: 'Stephen King' },
  ],
  ['Carlito']
)

// Name
console.log('//---- Full Name ----//')
console.log(user.getFullName())

// Pets
console.log('//---- Pets ----//')
console.log('Total Pets: ', user.countPets())
user.addPet('Chuleta')
console.log('Updated Total Pets: ', user.countPets())

// Books
console.log('//---- Books ----//')
console.log('Book List: ', user.getBookNames())
user.addBook('Otra vuelta de tuerca', 'Henry James')
console.log('Updated Book List: ', user.getBookNames())
