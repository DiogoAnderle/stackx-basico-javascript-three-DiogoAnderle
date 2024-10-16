const numeros = [-1, 0, 5];

// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.

function dobrarNumeros(numeros) {
  let dobroDoNumero = numeros.map((numero) => numero * 2);
  return dobroDoNumero;
}


// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
  return numeros.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(somarValores(numeros));

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
  let numerosPares = numeros.filter((numero) => numero % 2 === 0);
  return numerosPares;
}


module.exports = {
  dobrarNumeros,
  somarValores,
  filtrarPares,
};
