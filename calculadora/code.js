const displayValorActual = document.getElementById("valor-actual");
const displayValorAnterior = document.getElementById("valor-anterior");

const botonesNumeros = document.querySelectorAll('.number');
const botonesOperaciones = document.querySelectorAll('.operator');

class Calculadora {
    sumar(num1,num2) {
        return num1+num2;
    }
    restar(num1,num2) {
        return num1-num2;
    }
    dividir(num1,num2) {
        return num1.num2;
    }
    multiplicar(num1,num2) {
        return num1*num2;
    }


}


class Display {
    constructor(displayValorAnterior,displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora;
        this.valorActual = '';
        this.valorAnterior = '';
    }


    agregarNumero(numero) {
        this.valorActual = this.valorActual + numero;
        this.imprimirValores();
    }


    imprimirValores () {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }


}


const display = new Display(displayValorAnterior,displayValorActual);


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
});