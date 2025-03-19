const tabelas = document.querySelector("ul")
const botaoMostrar = document.querySelector(".mostrar-tudo")
const botaoMapear = document.querySelector(".mapear-tudo")
const bottaoRduzir = document.querySelector(".reduzir-tudo")
const botaoFiltrar = document.querySelector(".filtrar-tudo")


function formatoMoeda(moedas){
    const moeda = moedas.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'

    })

    return moeda
}

function aparecerTudo(mostrar) {
    let lista = ``
    mostrar.forEach((produtos) => {
        lista += `
            <li>
                <img src="${produtos.src}" alt="${formatoMoeda(produtos.name)}">
                <p>${produtos.name}</p>
                <p> R$ ${formatoMoeda(produtos.price)} </p>
            </li>`


    })

    tabelas.innerHTML = lista
}

function mapearTudo() {
    const preçosAmostrar = menuOptions.map((variedades) => ({
        ...variedades,
        price: variedades.price * 0.9,
    }))
    aparecerTudo(preçosAmostrar)

}

function reduzirTudo() {
    const preçosReduzidos = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    tabelas.innerHTML = `
            <li>
                <p> O total dos valores é de R$ ${formatoMoeda(preçosReduzidos)}</p>
            </li>`
        
}

function filtrarTudo(){
const preçosFiltrados = menuOptions.filter((produtos)=> produtos.vegan)
aparecerTudo(preçosFiltrados)

}


botaoMostrar.addEventListener('click', () => aparecerTudo(menuOptions))
botaoMapear.addEventListener('click',  mapearTudo)
bottaoRduzir.addEventListener('click', reduzirTudo)
botaoFiltrar.addEventListener('click', filtrarTudo)




