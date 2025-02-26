// Converte uma string para um número inteiro
function convertToInt(string) {
  if (isNaN(string)) {
    return "Is not a number.";
  } else {
    return parseInt(string);
  }
}

// Converte um número inteiro para uma string
function convertToString(number) {
  return number.toString();
}

// Converte um valor para um booleano
function convertToBoolean(value) {
  return Boolean(value);
}

module.exports = { convertToInt, convertToString, convertToBoolean };
