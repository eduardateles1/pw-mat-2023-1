//Dados do usuário
let fullname= 'Maria Eduarda Gomes Teles de Souza'
let username='Eduardateles1'
let group='alunos'

/*
Criando um objeto a partir das váriaveis acima 
Note que os nomes  das propriedades (à esquerda) coincide com o nome das variáveis (à direiita)
*/
// let user = {
//     fullname: fullname,
//     username: username,
//     group: group,
// }

/*
Criando um objeto equivalente ao código acima,
usando propriedades abreviadas. Não é necessário repetir o mesmo identificador antes e depois
do símbolo
*/
// let user = {
//     fullname,
//     username,
// }
// console.log(user)

/*
Um objeto pode misturar propriedades abreviadas e propriedades não abreviadas
*/
// let user2 ={
//    fullname,
//    username,
//    password: '123abc' //Propriedade abreviada
//    last_login, '2023-06-16 14:58'//Não abreviada
// }
// console.log(user2)

//Exibindo o valor de duas váriaveis. Veja como os valores são exibidos, mas a saida não informa 
// de quais variáveis provêm os valores

let x=10, y ='batata'
console.log(x,y)

//sáida melhorada: passando um obejto com propriedades abreviadas para console.log()
// como uma forma de sabermos de quais variáveis provêm os valore.

console.log({x,y})