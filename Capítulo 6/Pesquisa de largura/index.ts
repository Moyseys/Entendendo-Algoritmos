interface Grafo {
  [key: string]: string[]
}

let grafo: Grafo = {}

grafo.you = ['alice', 'bob', 'claire'];
grafo.bob = ['anuj', 'peggy'];
grafo.alice = ['peggy'];
grafo.claire = ['thom', 'jonny'];
grafo.anuj = [];
grafo.peggy = [];
grafo.thom = [];
grafo.jonny = [];

function eVendedor(pessoa: string): boolean{
  return pessoa[pessoa.length - 1] === 'm'
}

function pesquisa(nome: string): boolean{
  let lista = grafo[nome]

  while(lista.length > 0){
    let pessoa = lista.shift()
    if(!pessoa) continue
    let pesquisados: string[] = []

    if(!pesquisados.includes(pessoa)){
      if(eVendedor(pessoa)){
        console.log('Vendedor encontrado ' + pessoa )
        return true
      }else{
        lista = lista.concat(grafo[pessoa])
        pesquisados.push(pessoa)
       }
    }
  }
  console.log('vendedor não encontrado')
  return false
}

pesquisa('you')