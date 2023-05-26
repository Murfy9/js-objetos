const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    ); // O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).
  });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);
