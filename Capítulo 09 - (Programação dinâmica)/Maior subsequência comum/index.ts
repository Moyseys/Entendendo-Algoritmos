const palavraA = 'fish'
const palavraB = 'hish'

type Matriz = number[][]

let matriz: Matriz = new Array(palavraA.length + 1).fill(0).map(() => new Array(palavraB.length + 1).fill(0))

for (let i = 1; i <= palavraA.length; i++) {
  for (let j = 1; j <= palavraB.length; j++) {
    if (palavraA[i - 1] === palavraB[j - 1]) {
      matriz[i][j] = matriz[i - 1][j - 1] + 1
    } else {
      matriz[i][j] = Math.max(matriz[i][j - 1], matriz[i - 1][j])
    }
  }
}

for (const linha of matriz) {
  console.log(linha)
}

export default 0