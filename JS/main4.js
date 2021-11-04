
/*
class Validartor {

    constructor(){
        this.validations = [
            'data-min-lenght',

        ]
    }
        //Iniciar a validação de todos os campos
    validate(form){

        //Pega os inputs
        let inputs = form.getElementsByTagName('input')

        let inputsArray = [...inputs]

        inputsArray.forEach(function(input){

            for(let i = 0; this.validations.lenght > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {

                    let method = this.validations[i].replace('data-', '').replace('-','')

                    let value = input.getAttribute(this.validations[i])

                    this[method](input,value);

                }
            }

        },this);

    }

 };

 minlenght(input, minValue) {

    let inputLenght = input.value.lenght;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

 }


let form = document.getElementById('register-form')
let submit = document.getElementById('btn-submit')

let validator = new Validartor

/*Evento que dispara as validações

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('funciona')
})*/