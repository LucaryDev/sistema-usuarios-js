//HTML
//pegando id
const nome = document.getElementById("nome")

const email = document.getElementById("email")

const senha = document.getElementById("senha")

// JS
let contadorId = 0

class Usuario {
  constructor (nome,email,senha) {
    contadorId++
    this.id = contadorId
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}
