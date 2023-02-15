//Mensagem usando string template
// String template são strings especiais delimitadas pelo caracteres ``(acentos graves, "crases", que
// permitem a interpolação direta às variàveis no meio delas)

let nome='Maria';
let idade=20;
let cidade = 'Franca/SP'

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`);

//Dentro de uma String Template não estamos limitados a colocar apenas variáveis entre ${}
//Podemos colocar qualquer código js válido ali.

console.log(`Daqui a 5 anos ${nome.toUpperCase()} TERÁ ${idade + 5} ANOS`);