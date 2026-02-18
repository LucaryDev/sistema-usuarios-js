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