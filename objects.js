// Calcula o perímetro e a área de um retângulo
const retangulo = {
  largura: 5,
  altura: 8,
};
function calcularRetangulo(retangulo) {
  return {
    perimetro: 2 * (retangulo.largura + retangulo.altura),
    area: retangulo.largura * retangulo.altura,
  };
}
//console.log(calcularRetangulo(retangulo));

// Verifica se uma pessoa é maior de idade
const pessoa = {
  nome: "Diogo",
  idade: 35,
  cidade: "São Francisco do Sul",
};
function ehAdulto(pessoa) {
  return pessoa.idade >= 18 ? "Adulto" : "Menor de idade";
}
//console.log(ehAdulto(pessoa))

// Concatena os valores de um objeto em uma string
const obj = {
  marca: "Nissan",
  modelo: "Versa",
  versao: "SL",
  tipo: "Sedan",
  cor: "Branco",
  motor: "1.6",
  anoFabricacao: "2016",
};
function concatenaValores(obj) {
  let resultado = "";
  const valores = Object.values(obj);
  console.log(valores);
  valores.forEach((valor, index) => {
    resultado += valor;
    if (index < valores.length - 1) {
      resultado += " ";
    }
  });
  return resultado;

  // Tudo isso pode ser resumido em uma linha
  //return Object.values(obj).join(' ');
}

console.log(concatenaValores(obj));

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
