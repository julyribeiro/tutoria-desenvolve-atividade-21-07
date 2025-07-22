//EXERCICIOS DA TUTORIA DE 21/07/2025

// EXERCICIO 1
// - Criar uma função para soma de dois números

function soma(a, b) {
  return a + b;
}

console.log(soma(3, 5)); 


//OU COM ARROW FUNCTION

const somar = (a, b) => a + b;

//EXIBINDO O RESULTADO DE VÁRIAS FORMAS:
console.log (`O resultado da soma é: ${somar(1, 1)}`);
console.log ("O resultado da soma é", somar(2, 5));
console.log ("O resultado da soma é " + somar(2, 5));


//EXERCICIO 2

//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)
function verificarMaioridade (person) {
    return {
        ... person,
        isAdult: person.age >= 18
    }
}

//Testando a função maioridade
const pessoa1 = { 
    name: "July", 
    age: 27 };

console.log(verificarMaioridade(pessoa1));


