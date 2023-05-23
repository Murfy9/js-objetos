const cliente = {
  nome: "João",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

// Podemos fazer uma array de objetos e utilizar os métodos de array para manipulá-los.

// Métodos de array
cliente.enderecos.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
