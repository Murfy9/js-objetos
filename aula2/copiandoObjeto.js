const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

const objPersonagem2 = Object.create(objPersonagem);
objPersonagem2.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem2.nome); //Gandalf, o Cinzento

// O método Object.create() cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.
