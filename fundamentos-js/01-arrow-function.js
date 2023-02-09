/*
Função tradicional com 1 parâmetro e 1 linha de corpo contendto return
*/
function quadrado(n){
    return n * n
}
console.log('Função Tradicional:',quadrado(7))

//Função equivalente no formato arrow function
const quadradoA= n => n * n
console.log('Arrow Function:', quadrado(7))

// Função tradicional com mais de 1 parâmetro e uma única linha de corpo contendo return

function soma(a,b,c){
   return a + b + c
}
console.log('Soma Tradicional:', soma(10, 15, 20))

//Arrow function equivalente
//quando há mais de 1 parâmetro, saõ necessários parênteses em volta deles

const somaA = (a,b,c) => a+ b + c
    console.log('Soma arrow:', somaA(10,15,20))

//Função tradicional sem parâmetro e com única linha de return

function aleatorio0a9(){
    //retorna um número aleatório entre 0 a 9
    //math.random(): gera um número aleatório fracionário entre 0 e 1
    // math.floor(): retira as casas decimais de um número fracionário
    return Math.floor(Math.random()* 10)   
}
console.log('Aleatório tradicional:', aleatorio0a9())

//arrow function equivalente
//os parentêses devem estar presentes, mesmo que não haja parâmetro

const aleatorio0a9A =() => Math.floor(Math.random()* 10)

console.log('Aleatório arrow',aleatorio0a9A())

//Função fatorial com um parâmetro e mais de uma linha no corpo

function fatorial(n){
    let resultado =1
    for(let i =n; i >1; i--) resultado *= i
    return resultado
}
console.log('Fatorial tradicional:', fatorial(6))

//arrow function equivalente
// não há economia de linhas/códigos em relação ao corpo da função

const fatorialA = n =>{
    let resultado =1
    for(let i =n; i >1; i--) resultado *= i
    return resultado
}
console.log('Fatorial arrow', fatorialA(6))