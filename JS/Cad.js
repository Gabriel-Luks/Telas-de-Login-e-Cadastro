let btn = document.querySelector('#VerSenha')

btn.addEventListener('click', ()=>
{let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password')
    {inputSenha.setAttribute('type','text')}
    else{inputSenha.setAttribute('type','password')}
    
})

let btnConfirm = document.querySelector('#VerConfirm')

btnConfirm.addEventListener('click', ()=>{
    let ConfirmInput = document.querySelector('#confirmsenha')

    if(ConfirmInput.getAttribute('type') == 'password')
    {ConfirmInput.setAttribute('type','text')}
    else{ConfirmInput.setAttribute('type','password')}
})