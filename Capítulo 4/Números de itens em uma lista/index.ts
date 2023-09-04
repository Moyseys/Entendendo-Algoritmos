const array = [123, 789, 456, '234', 987, 345, '567', 890, '432', 321, '654', '123', 987, 567, 456];

type ContarIntensEmLista = <T>(lista: T[]) => number 

const itensNaLista: ContarIntensEmLista = <T> (lista: T[]) => {
  if(lista.length <= 0){
    return 0
  }

  return 1 + itensNaLista(lista.splice(1, lista.length))
}

console.log(itensNaLista(array));

export default 1