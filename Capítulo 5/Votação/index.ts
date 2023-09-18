interface TabelaHash<T> {
  [key: string]: T
}

const voted: TabelaHash<boolean> = {}

function verificaVoto(name: string): void {
  if (voted[name]) {
      console.log('Mande embora!')
  } else {
      voted[name] = true
      console.log('Deixa vota!')
  }
}

verificaVoto("tom")
verificaVoto("mike")
verificaVoto("mike") 