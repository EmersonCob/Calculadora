// calculadora

let getEntrada = document.querySelector("input#btnInput")
let getOperador = document.querySelector("input#operator")



function getValue(getEntrada){
    console.log(getEntrada)
}

function getOperate(getOperate){
    console.log(getOperate)
}



/*

function calculate (number1, operate, number2) {
    
    let result = 0

    number1 = document.querySelector(numero1);innerHTML;
    operate = ("Informe o operador: ");
    number2 = document.querySelector(numero2);innerHTML;


    switch (operate) {
        case '+':
            result = Number(number1) + Number(number2)
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
             window.alert('Não implementado')
             break
        return 0;           
    }

    window.alert(`O resultado é: ${result}`)
}

calculate(numero1, operador, numero2)

*/