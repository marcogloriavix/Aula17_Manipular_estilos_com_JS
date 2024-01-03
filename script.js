let titulo = document.querySelector("h2")
console.log(titulo)

titulo.style.color = "blue"
titulo.style.fontSize = "2.5rem"
titulo.style.backgroundColor = "yellow"


let button = document.querySelector("button")
console.log(button)

button.style.color = "blue"
button.style.fontSize = "1.1rem"
button.style.backgroundColor = "silver"
button.style.fontWeight = "bold"


// Primeira interação do usuário
// na 1ª interação incluiu um nome de usuario não valido
let loginUsuario = document.getElementById("login-usuario")
console.log(loginUsuario)
loginUsuario.classList.add("error")

let errorTextUsuario = document.querySelector(".error-text")
console.log(errorTextUsuario)
errorTextUsuario.classList.add("visible")

// Segunda interação do usuário
//Usuario digitou um nome de usuario válido MAS uma senha incorreta
let loginUsuarioCorreto = document.getElementById("login-usuario")
console.log(loginUsuarioCorreto)
loginUsuarioCorreto.classList.add("correct")

let tirarUsuarioInvalido = document.querySelector(".error-text")
console.log(tirarUsuarioInvalido)
tirarUsuarioInvalido.classList.add("invisible")

//Senha incorreta
//
let loginSenha = document.getElementById("login-senha")
console.log(loginSenha)
loginSenha.classList.add("error")

let errorLoginSenha = document.querySelector(".error-text-senha")
console.log(errorLoginSenha)
errorLoginSenha.classList.add("visible")