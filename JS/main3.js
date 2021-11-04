function entrar(){
	let usuario = document.querySelector('#usuario')
	let userlabel = document.querySelector('#userlabel')

	let senha = document.querySelector('#senha')
	let senhalabel = document.querySelector('#senhalabel')

	let msgError = document.querySelector('#msgError')
	let listaUser = []

	let userValid = {
		nome: '',
		user: '',
		senha: ''
	}

	listaUser = JSON.parse(localStorage.getItem('listaUser'))

	listaUser.forEach((item) =>{
		if(usuario.value == item.userCad && senha.value == item.senhaCad){
			userValid = {
				nome: item.nomeCad,
				user: item.userCad,
				senha: item.senhaCad
			}
		}
	})

	if(usuario.value == userValid.user && senha.value == userValid.senha){
		window.location.href = '#'

		let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
		localStorage.setItem('token', token)
		
	}else{
		userlabel.setAttribute('style', 'color:red')		
		usuario.setAttribute('style', 'border-color:red')
		senhalabel.setAttribute('style', 'color:red')
		senha.setAttribute('style', 'border-color:red')
		//senhalabel.innerHTML = 'Senha deve ter 6 caracteres'
		msgError.setAttribute('style', 'display:block')
		msgError.innerHTML = 'Usuário ou senha incorretos'
		usuario.focus()
	}
}


 

	/*function n1(){
let usuario = document.querySelector('#usuario')
let userlabel = document.querySelector('#userlabel')

let senha = document.querySelector('#senha')
let senhalabel = document.querySelector('#senhalabel')

let msgError = document.querySelector('#msgError')

let listaUser = []

let userValid = {
	nome: '',
	user:'',
	senha:''
}

listaUser = JSON.parse(localStorage.getItem('listaUser'))

listaUser.forEach((item) =>{
	if(usuario.value == item.userCad && senha.value == item.senhaCad){
		userValid = {
			nome: item.nomeCad,
			user: item.userCad,
			senha: item.senhaCad
		}
	}
})
if(usuario.value == userValid.user && senha.value == userValid.senha){
	window.location.href = '#'

	let token = Math.random().toString(16).substr(2) +  Math.random().toString(16).substr(2)
		localStorage.setItem('token', token)

		localStorage.setItem('userLogado', JSON.stringify(userValid))
} else{
	userlabel.setAttribute('style', 'color:red')
	usuario.setAttribute('style', 'border-color:red')
	senhalabel.setAttribute('style', 'color:red')
	senha.setAttribute('style', 'border-color:red')
	msgError.setAttribute('style', 'display:block')
	msgError.innerHTML = 'Usuário ou senha incorretos'
	usuario.focus()
}
} */