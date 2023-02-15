let media = 7.2, resultado

if (media >= 6) {
    resultado = 'Aprovado';
}
else {
    resultado = 'Reprovado';
}
console.log({ media, resultado })

//Usando Operador Ternário para chegar no mesmo resultado
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log('Usando operador ternário:', { media, resultado })

//Quando há apenas um alinha depois de um if, um else, um while, etc podemos omitir as chaves
let user = 'guest', msg

if (user === 'admin') msg = 'Bem vindo!';
else msg = 'Sem permissão';

console.log({ user, msg })

//Usando Operador Ternário
msg = user === 'admin' ? 'Bem-vindo!' : 'Sem premissão';
console.log('Usando Operador Ternário:', { user, msg })