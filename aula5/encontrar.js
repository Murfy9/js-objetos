const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave].includes(valor));
} // O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);
