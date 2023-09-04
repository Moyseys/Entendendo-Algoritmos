//Exercícios do capítulo 4
//Função de soma recursiva

type Soma = (x: number[]) => number 

const soma: Soma = (x: number[]): number => {
  if(x.length <= 1){
    return x[0]
  }
  
  return x[0] + soma(x.splice(1, x.length))
}


const array = [123, 789, 456, 234, 987, 345, 567, 890, 432, 321, 654, 123, 987, 567, 456];
console.log(soma(array));


export default 1
