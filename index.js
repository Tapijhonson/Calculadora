
const prompt = require("prompt-sync")()

const num1 = Number(prompt("Digite um numero: ")) ;
const num2 = Number(prompt("Digite outro numero: ")) ;
console.log("\nMenu:\n1- Soma\n2- subtracao\n3- multiplicacao\n4- divisao")

const operacao = Number(prompt("Qual operacao deseja?: ")) ;



class Calculadora{
    constructor(numero1,numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    soma(){
     return this.numero1 + this.numero2;
    }
    subtracao(){
        return this.numero1 - this.numero2;
    }
    multiplicacao(){
        return this.numero1 * this.numero2;
    }
    divisao(){
        return this.numero1 / this.numero2;
    }
}


const op1 = new Calculadora(num1, num2)

if(operacao == 1){
    console.log(op1.soma())
}

if(operacao == 2){
    console.log(op1.subtracao())
}

if(operacao == 3){
    console.log(op1.multiplicacao())
}

if(operacao == 4){
    console.log(op1.divisao())
}