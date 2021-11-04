

    /*
        Nomeando os let,e pegado os Id 
        primeiro é o input e depois o label
    */

let nome = document.querySelector("#nome")
let labelnome = document.querySelector('#labelnome')
let validNome = false

let usuario = document.querySelector("#usuario")
let labelusuario = document.querySelector('#labelusuario')
let validusuario = false

let senha = document.querySelector("#senha")
let labelsenha = document.querySelector('#labelsenha')
let validSenha = false

let confirmSenha = document.querySelector("#confirmSenha")
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')



nome?.addEventListener('keyup', ()=>{
    if(nome.value.length <=2){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome *Inserir mais de 4 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }else{
        labelnome.setAttribute('style', 'color: #25E728')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: #25E728')
        validNome = true
    }
})


usuario?.addEventListener('keyup', ()=>{
    if(usuario.value.length <=4){
        labelusuario.setAttribute('style', 'color: red')
        labelusuario.innerHTML = 'Usuário *Inserir mais de 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validusuario = false
    }else{
    labelusuario.setAttribute('style', 'color: #25E728')
    labelusuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: #25E728')
        validusuario = true
    }
})
senha?.addEventListener('keyup', ()=>{
    if(senha.value.length <=5){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'Senha *Inserir mais de 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
    labelsenha.setAttribute('style', 'color: #25E728')
    labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: #25E728')
        validSenha = true
    }
})

confirmSenha?.addEventListener('keyup', ()=>{
    if(senha.value !=confirmSenha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirSenha = false
    }else{
    labelConfirmSenha.setAttribute('style', 'color: #25E728')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: #25E728')
        validConfirSenha = true
    }
})

function cadastrar(){
    if(validNome && validusuario && validConfirSenha && validSenha){


        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSucess.setAttribute('style', 'display:block')
        msgSucess.innerHTML = 'Cadastrando usuário...'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML =''

            setTimeout(()=>{
                window.location.href = '#'
            },4000)

    }else{
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar'
        msgSucess.setAttribute('style', 'display:none')
        msgSucess.innerHTML =''
    }
}