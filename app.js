

let listaDeNumerosSorteados = [];
let limiteMaximoDoNumero = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;


function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagem() {
exibirTextoNaTela('h1', 'hora do desafio');
exibirTextoNaTela('p', 'digite um numero de 1 a ' +limiteMaximoDoNumero);
}

exibirMensagem();

function verificaChute() {
   let chute = document.querySelector('input').value; 
   if (chute == numeroSecreto) { 
       exibirTextoNaTela('h1', 'ACERTOU');
       let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let  mensagemTentativa = ' voce descobriu o numero secreto com ' +tentativas+ ' ' +palavraTentativa;
       exibirTextoNaTela('p', mensagemTentativa);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o numero secreto e menor que ' +chute);
    } else {
         exibirTextoNaTela('p', 'o numero secreto é maior que ' +chute);
    }
    tentativas++;
    limparCampo();
    } 
}

function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagem();
        document.getElementById('reiniciar').setAttribute('disabled',true)  
}
 
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteMaximoDoNumero + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == limiteMaximoDoNumero ) {
   listaDeNumerosSorteados = [];
  }
   console.log(numeroEscolhido);

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio (); 
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }
}

 console.log(numeroSecreto);

function limparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

