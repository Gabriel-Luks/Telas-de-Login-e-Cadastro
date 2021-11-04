let btn = document.querySelector('.fa-eye')
/*let para nomear a variavel, docu */
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') /*É por estar em password que entra no if*/
    /*Se o atributo type for igual a password*/
    {inputSenha.setAttribute('type','tex')}
    /*Se o atributo de inputSenha for password, colocar em text*/
    else{inputSenha.setAttribute('type','password')}
    /*Se o atributo de inputSenha não for igual a password, coloca em password*/
})