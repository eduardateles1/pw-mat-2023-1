//Encontrando e menor e o maior número em uma série

let minimo = Math.min(2, -7, 8,4,0)
let maximo = Math.max(2,-7, 8,4,0)

// Números dentro de um vetor
let nums = [2,-7, 8,4,0]

//Passando o vetor para Math.min e Math.max
minimo =Math.min(nums) //doesn´t work
maximo =Math.max(nums) //doesn´t work

//A sintaxe de espalhamento ou spreading (representada por ... antes da variável é capaz de 
//"desempacotar um vetor em uma série de valores avulsos ")
minimo=Math.min(...nums)
maximo =Math.max(...nums)

console.log({minimo, maximo})

let carro1 ={
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor 'Azul'

}
let carro2 = {...carro1}

//Mudando o valor das prorpriedades de carro 2
carro2.marca ='Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro.ano = 1990

console.log({carro1, carro2})