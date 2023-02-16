/*Função que calcula a área de uma figura geométrica plana
O parâmetro forma fica predefinido com valor 'R'
*/se o valor desse parÂmetro não for passado a função irá assumir que se trata de umr retângulo
function calcular_area(base, altura, forma) {
    switch (forma) {
        case 'R': //Retângulo
            return base * altura
        case 'T': //Triângulo
            return base * altura / 2
        case 'E': //Elipse/Círculo
            return (base / 2) * (altura / 2) * Math.PI
        default: //forma desconhecida
            return null

    }
}
console.log(`Àrea retângulo 12x16: ${calcular_area(12, 16, 'R')}`)
console.log(`Àrea Triângulo 15x09: ${calcular_area(15, 09, 'T')}`)
console.log(`Àrea Elipse  10x18: ${calcular_area(10, 18, 'E')}`)
console.log(`Àrea forma desconhecida 7x13: ${calcular_area(7, 13, 'A')}`)

//Deixando de passa o parâmetro da forma
console.log(`Área retângulo 10x25 ${calcular_area(10,25)}`);

/*Regras para uso de parâmetros predefinidos em funções
1. O parâmetro predefinido deve vir sempre por último na lista de parâmetros 
2. Pode haver mais de um parâmetro predefinido, mas eles devem vir sempre no final da lista
de parâmetros
*/

