type Pesquisa = <T>(lista: T[], item: T) => T | null;

const pesquisaSimples: Pesquisa = <T>(lista: T[], item: T) => {
  for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    if (element === item) {
      return element;
    }
  }

  return null;
};

const pesquisaBinaria = <T>(lista: T[], item: T) => {
  let inicio = 0;
  let fim = lista.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    const chute = lista[meio];
    if (chute === item) return chute;
    if (chute > item) fim = meio - 1;
    else inicio = meio + 1;
  }

  return null;
};

const listaOrdenada = Array.from({ length: 1000000 }, (_, i) => i + 1);
console.time('Pesquisando');

//Pesquisa simple
const resultPesquisaSimples = pesquisaSimples(
  listaOrdenada,
  listaOrdenada.length,
);
console.log(`Resultado da pesquisa simples => ${resultPesquisaSimples}`);

//Pesquisa Binária
const resultPesquisaBinaria = pesquisaBinaria(
  listaOrdenada,
  listaOrdenada.length,
);
console.log(`Resultado da pesquisa Binária => ${resultPesquisaBinaria}`);
