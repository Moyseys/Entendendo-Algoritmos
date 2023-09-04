//Exercícios do capítulo 4
//Função de soma recursiva

type ValorMaximo = (lista: number[]) => number

const valorMaximo: ValorMaximo = (lista: Array<number>): number =>  {
  if(lista.length <= 1){
    return lista[0]
  }

  const maxvl = valorMaximo(lista.splice(1))
  return maxvl > lista[0] ? maxvl : lista[0]
}

const array = [123, 789, 456, 234, 997, 345, 567, 890, 432, 321, 654, 123, 987, 567, 456];
console.log(valorMaximo(array));


export default 1
