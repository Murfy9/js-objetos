const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "111223334445",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

// [] Esta última surgiu para cenários em que, não necessariamente, sabemos quais campos acessaremos. E que ao acessarmos uma propriedade que não existe, o valor devolvido será undefined.
