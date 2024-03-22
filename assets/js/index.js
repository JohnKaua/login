let btnSair = document.querySelector('#btnSair')
let btnEntrar = document.querySelector('#btnEntrar')

if (localStorage.getItem('token') != null){
    btnSair.setAttribute('style', 'display: block')
    btnEntrar.setAttribute('style', 'display: none')
}else{
    btnEntrar.setAttribute('style', 'display: block')
    btnSair.setAttribute('style', 'display: none')
}

function pagEntrar(){
    window.location.href = "./assets/html/login.html"
}

function sair(){
    localStorage.removeItem('token')
    location.reload()
}