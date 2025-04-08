let notas = []
let novoAluno
let nota
let media = 0
let i
let resultado = ""
//rotina inserir nome do aluno.
function inserirNovoAluno() {
let nomeDoAluno = document.getElementById("nomeDoAluno");
let nomeAluno = nomeDoAluno.value
novoAluno = document.getElementById("novoAluno");
let aluno = document.createElement("td")
novoAluno.appendChild(aluno)
notas.push(String(nomeAluno))
aluno.textContent = nomeAluno
nomeDoAluno.value = ""
}
//rotina inserir nota.
function inserirNovaNota() {
    let notaDoAluno = document.getElementById("notaDoAluno");
    let notaAluno = notaDoAluno.value
    notas.push(Number(notaAluno))
    notaDoAluno.value = ""
    renderizarNota()

}

function renderizarNota() {
    let novaNota = document.getElementById("novaNota");
    novoAluno.innerHTML = ""
    
    
    if (notas.length < 5) {
        i = 0
        for (i; i < notas.length; i++) {
        nota = document.createElement("td")
        novoAluno.appendChild(nota)
        nota.textContent = notas[i] 
        }
    } else {
        incluirMedia()
    }
    
}
function incluirMedia() {
    media = (notas[1] + notas[2] + notas[3] + notas[4]) / (notas.length - 1)
    notas.push(Number(media))
    i = 0
    for (i; i < notas.length; i++) {
        media = document.createElement("td")        
        novoAluno.appendChild(media)
        media.textContent = notas[i]
    } incluirResultado()
}
function incluirResultado() {
    if (notas[5] >= 6) {
        resultado = "Aprovado"
    } else {
        resultado = "Reprovado"
    }
    novoAluno.innerHTML = ""
    notas.push(String(resultado))
    i = 0
    for (i; i < notas.length; i++) {
        resultado = document.createElement("td")        
        novoAluno.appendChild(resultado)
        resultado.textContent = notas[i] 
    }
}
              
    
    

   

    