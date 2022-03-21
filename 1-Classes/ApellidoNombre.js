class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(nombreMascota) {
    return this.mascotas.push(nombreMascota)
  }

  countMascotas() {
    return this.mascotas.length
  }

  addBook(nombre, autor) {
    return this.libros.push({ nombre: nombre, autor: autor })
  }

  getBookNames() {
    let nombresLibros = []
    for (let i = 0; i < this.libros.length; i++) {}
    return Object.values(this.libros)
  }
}

const usuario = new Usuario(
  'Lucas',
  'Koval',
  [
    { nombre: 'Dracula', autor: 'Bram Stoker' },
    { nombre: 'El Resplandor', autor: 'Stephen King' },
  ],
  ['Carlito']
)

console.log(usuario.getFullName())
console.log(usuario.countMascotas())
usuario.addMascota('Bruno')
console.log(usuario.countMascotas())
console.log(usuario.getBookNames())
usuario.addBook('Otra vuelta de tuerca', 'Henry James')
console.log(usuario.getBookNames())
