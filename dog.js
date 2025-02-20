'use strict'

function criarImagem (link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    novaImg.src = link
    galeria.appendChild(novaImg)
}

async function pesquisarFotos(raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url) //faz requisicao web e retorna a requisição do seervidor
    const data = await response.json()

    return data.message
}

async function preencherFotos(){
    const raca = document.getElementById('raca').value
    const fotos = await pesquisarFotos(raca)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('') //substiyua seus filhos por nada

    fotos.forEach(criarImagem)

    console.log(fotos)
}
document.getElementById('pesquisar').addEventListener('click', preencherFotos)