let btn = document.querySelector('.fa-eye')

function entrar(){
    //variaveis input e label dos campos
    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    //variavel para mensagem de erro
    let msgError = document.querySelector('#msgError')

    //declaracao lista de usuarios
    let listaUser = []

    let validUser = {
        nome: null,
        usuario: null,
        senha: null
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser?.forEach((item) => {
        if(usuario.value == item.cadUsuario && senha.value == item.cadSenha){
            validUser = {
                nome: item.cadNome,
                usuario: item.cadUsuario,
                senha: item.cadSenha
            }
        }
    });

    if(usuario.value == validUser.usuario && senha.value == validUser.senha){
        setTimeout(()=>{
            window.location.href = '../../index.html'
        }, 1000)

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

    }else{
        labelUsuario.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorreto(s)'
    }
    
}

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})