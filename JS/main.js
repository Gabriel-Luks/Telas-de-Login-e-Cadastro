/*Ver senha da tela de Login*/


let ver = document.querySelector('.fa-eye')

ver.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

/*Ver senha da tela de Cadastro */

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

btn?.addEventListener('click', function(){
	let inputSenha = document.querySelector('#senha')
  
	if(inputSenha.getAttribute('type') == 'password'){
		inputSenha.setAttribute('type', 'text')
	} else {
		inputSenha.setAttribute('type', 'password')
	}
})

btnConfirm?.addEventListener('click', function(){
	let inputConfirmSenha = document.querySelector('#confirmSenha')

	if(inputConfirmSenha.getAttribute('type') == 'password'){
		inputConfirmSenha.setAttribute('type', 'text')
	} 
	else {
		inputConfirmSenha.setAttribute('type', 'password')
	}
})
