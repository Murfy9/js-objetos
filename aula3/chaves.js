const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

// cliente.enderecos = [
//   {
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "ap 934",
//   },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}

// O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in enumera propriedades que estejam na cadeia de protótipos).
