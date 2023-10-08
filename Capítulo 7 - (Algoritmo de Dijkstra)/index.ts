//Tabela hash do Grafo
const grafo = new Map()
grafo.set('início', new Map())
grafo.get('início').set('a', 5)
grafo.get('início').set('b', 2)

grafo.set('a', new Map())
grafo.get('a').set('c', 4)
grafo.get('a').set('d', 2)

grafo.set('b', new Map())
grafo.get('b').set('a', 8)
grafo.get('b').set('d', 7)

grafo.set('c', new Map())
grafo.get('c').set('fim', 3)
grafo.get('c').set('d', 6)

grafo.set('d', new Map())
grafo.get('d').set('fim', 1)

grafo.set('fim', new Map())

//Tabela Hash de custos
const custos = new Map()
custos.set('a', 6)
custos.set('b', 2)
custos.set('c', Infinity)
custos.set('d', Infinity)
custos.set('fim', Infinity)

//Tabela Hash dos pais
const pais = new Map()
pais.set('a', 'início')
pais.set('b', 'início')
pais.set('c', '')
pais.set('d', '')
pais.set('fim', null)

const processados: Array<String> = []

function acheMenorCusto(custos: Map<string, number>): string{
  let menorPeso = Infinity
  let verticeMenorPeso = ''

  for (const custo of custos) {
    let verticeAtual = custo[0]
    let pesoDoVerticeAtual = custo[1]

    if(pesoDoVerticeAtual < menorPeso && !processados.includes(verticeAtual)){
      menorPeso = pesoDoVerticeAtual
      verticeMenorPeso = verticeAtual
    }
  }

  return verticeMenorPeso
}

while(acheMenorCusto(custos)){
  const verticeDeMenorCusto = acheMenorCusto(custos)
  const vizinhosDoVerticeDeMenorCusto = grafo.get(verticeDeMenorCusto)
  const custoDoverticecDeMenorCusto = custos.get(verticeDeMenorCusto)

  //Faço um for nas chaves do "vizinhosDoVerticeDeMenorCusto" para achar seus vizinhos
  for (const vizinho of vizinhosDoVerticeDeMenorCusto.keys()) {
    //Defino o Custo para ligação desses dois vertices
    //No caso o vertice vizinho e o de menor custo
    const novoCusto = (vizinhosDoVerticeDeMenorCusto.get(vizinho) 
    + custoDoverticecDeMenorCusto)

    if(novoCusto < custos.get(vizinho)){
      custos.set(vizinho, novoCusto)
      pais.set(vizinho, verticeDeMenorCusto)
    }
  }

  processados.push(verticeDeMenorCusto)
}

console.log(acheMenorCusto(custos))

//exibição de tablea hash
for (const linhas of custos) {
  console.log(linhas);
}

export default 0