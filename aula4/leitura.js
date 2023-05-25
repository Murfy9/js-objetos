const dados = require("./cliente.json");
// JSON é uma sigla para JavaScript Object Notation, ou "Notação de Objeto JavaScript" em português. Ou seja, é um formato que permite a escrita de objetos do JavaScript.

// O require é uma função built-in do Node.js e é usado para carregar módulos de arquivos externos e pacotes instalados globalmente. Ele também pode ser usado para carregar módulos internos do Node.js, como http e fs.

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
// O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome); // undefined

const objetoCliente = JSON.parse(clienteEmString);
// O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado.

console.log(objetoCliente);
