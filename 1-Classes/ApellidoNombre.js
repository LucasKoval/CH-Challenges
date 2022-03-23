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
    console.log('Pet added successfully!')
    return this.pets.push(petName)
  }

  countPets() {
    return this.pets.length
  }

  addBook(name, author) {
    console.log('Book added successfully!')
    return this.books.push({ name: name, author: author })
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
user.addPet('Bruno')
console.log('Updated Total Pets: ', user.countPets())

// Books
console.log('//---- Books ----//')
console.log('Book List: ', user.getBookNames())
user.addBook('Otra vuelta de tuerca', 'Henry James')
console.log('Updated Book List: ', user.getBookNames())
