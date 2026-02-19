const usuarios = []

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

function criarUsuario(nome, email, senha) {
  usuarios.push(new Usuario(nome, email,senha))
}

function listarUsuarios() {
  return usuarios.map(({ senha, ...usuarioSeguro }) => usuarioSeguro)
}

function atualizarDados(id, nomeNovo, emailNovo, senhaNova) {
  if(!id || typeof id !== "number") {
    return "id inválido"
  }
  
  const usuario = usuarios.find(u => {
    u.id === id
  })
  
  if(!usuario) return "usuario não encontrado"
  
    usuario.nome= nomeNovo
    usuario.email = emailNovo
    usuario.senha = senhaNova
  
  return usuario
}