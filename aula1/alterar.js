const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone); // undefined

pessoa.telefone = "11 2222333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

// Como alterar e criar as propriedades, mesmo após o objeto já ter sido criado.

const novaPessoa = {
  nome: "Pedro",
};

// pessoa = novaPessoa;
// const apenas não podem ser reatribuidas, mas podem ter seu conteúdo interno alterado.
