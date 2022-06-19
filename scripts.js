let seuVotoPara = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let informacoes = document.querySelector('.d1-4');
let rodape = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');
let pisca = document.querySelector('.pisca');
let box = document.querySelector('.d1-3')
let itemNumero = document.querySelector('.btn')

const etapaAtual = 0;

function comecarEtapa() {
    //box.style.display = 'none';

    let etapa = etapas[etapaAtual]

    let numeroHtml = '';
    
    for(let i=0; i<etapa.numeros; i++){
        numeroHtml += `${i}`;
    }

    seuVotoPara.style.display = 'none';
    informacoes.style.display = 'none';
    cargo.innerHtml = etapa.titulo;
    rodape.style.display ='none';
    lateral.style.display = 'none';
    box.innerHtml = numeroHtml;
    //box.style.display = 'block';
}

function clicou(x) {
    //alert('Clicou em ' + x);
}

function votoBranco() {
    //alert('Clicou em Branco');
}

function votoCorrige() {
    //alert('Clicou em Corrige');
}

function votoConfirma() {
    //alert('Clicou em Confirma');
}

comecarEtapa()