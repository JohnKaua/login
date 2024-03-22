//botoes de revelar senha
let btnSenha = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

//variaveis input, label e validação dos campos
let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

//variaveis de mensagem de cadastro
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

//validação nome
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = '<strong>*O nome deve ter no mínimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

//validação usuário
usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 3){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = '<strong>*O usuário deve ter no mínimo 4 caracteres</strong>'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

//validação senha
senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = '<strong>*A senha deve ter no mínimo 8 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

//validação confirmar senha
confirmSenha.addEventListener('change', () => {
    if(senha.value != confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = '<strong>*As senhas não correspondem</strong>'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            cadNome: nome.value,
            cadUsuario: usuario.value,
            cadSenha: senha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', "display: block")
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', "display: none")
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = '../html/login.html'
        }, 1000)
        
    }else{
        msgError.setAttribute('style', "display: block")
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'
        msgSuccess.setAttribute('style', "display: none")
        msgSuccess.innerHTML = ''
    }
}

//revelar campo da senha
btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

//revelar campo de confirmar a senha
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    }else{
        inputConfirmSenha.setAttribute('type', 'password')
    }
})
