// Função que calcula a área de uma figura geométrica plana
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
