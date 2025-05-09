const palavras = [
  "CASA",
  "BOLA",
  "GATO",
  "CHUVA",
  "SOL",
  "LUA",
  "FOGO",
  "VENTO",
  "PATO",
  "LIVRO",
  "MESA",
  "CACHORRO",
  "GATO",
  "CARRO",
  "AVIAO",
  "BICICLETA",
  "FELIZ",
  "TRISTE",
  "AMIGO",
  "FELINO",
  "PEIXE",
  "CAVALO",
  "ELEFANTE",
  "TIGRE",
  "LEÃO",
  "URSO",
  "PANDA",
  "RAPOSA",
  "LAGARTO",
  "TARTARUGA",
  "GIRAFA",
  "ZEBRA",
  "CANGURU",
  "PAVÃO",
  "FALCÃO",
  "CORVO",
  "GAIVOTA",
  "PAPAGAIO",
  "ARARA",
  "TUCANO",
  "ANDORINHA",
];

let palavraAleatoria = "";
let tentativaAtual = "";
let pontuacao = 0;
let tentativasErradas = 0;
const palavrasAcertadas = new Set(); // Para rastrear palavras únicas acertadas
const totalPalavrasUnicas = new Set(palavras).size;

function novaPalavra() {
  palavraAleatoria = palavras[pontuacao % palavras.length];
  document.getElementById("palavra").innerText =
    embaralharPalavra(palavraAleatoria);
  document.getElementById("resultado").innerText = "";
    tentativaAtual = "";
    tentativasErradas = 0; // Reinicia o contador de tentativas erradas
    esconderBotaoDica(); // Esconde o botão de dica ao iniciar uma nova palavra
}

function embaralharPalavra(palavra) {
  let palavraEmbaralhada = "";
  const palavraArray = palavra.split("");
  while (palavraArray.length > 0) {
    const indiceAleatorio = Math.floor(Math.random() * palavraArray.length);
    palavraEmbaralhada += palavraArray.splice(indiceAleatorio, 1)[0];
  }
  return palavraEmbaralhada;
}

function criarTecladoVirtual() {
  const tecladoContainer = document.getElementById("teclado-virtual");
  const linhasTeclado = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  linhasTeclado.forEach((linha) => {
    const linhaDiv = document.createElement("div");
    linha.split("").forEach((letra) => {
      const botao = document.createElement("button");
      botao.innerText = letra;
      botao.classList.add("tecla");
      botao.onclick = () => adicionarLetra(letra);

      linhaDiv.appendChild(botao);
    });

    tecladoContainer.appendChild(linhaDiv);
  });

  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.classList.add("tecla", "tecla-apagar");
  botaoApagar.onclick = apagarUltimaLetra;
  tecladoContainer.appendChild(botaoApagar);
}

function adicionarLetra(letra) {
  tentativaAtual += letra;
  atualizarTentativa();
}

function apagarUltimaLetra() {
  tentativaAtual = tentativaAtual.slice(0, -1);
  atualizarTentativa();
}

function atualizarTentativa() {
  document.getElementById("resultado").innerText = tentativaAtual;
}

function verificarTentativa() {
  if (tentativaAtual === palavraAleatoria) {
    pontuacao++;
    atualizarPontuacao();
      document.getElementById("resultado").innerText = "Correto! Você acertou!";
      palavrasAcertadas.add(palavraAleatoria); // Adiciona a palavra acertada ao conjunto
      tentativasErradas = 0; // Reinicia o contador de tentativas erradas
      esconderBotaoDica(); // Esconde o botão de dica após acertar a palavra
      if(palavrasAcertadas.size === totalPalavrasUnicas) {
       mostrarModal("modal-parabens");
      }
      setTimeout(() => {
          if (palavrasAcertadas.size < totalPalavrasUnicas) {
              novaPalavra();
          }
          tentativaAtual = ""; // Limpa a tentativa atual após verificar
          atualizarTentativa(); // Atualiza a exibição da tentativa
      }, 2000); // Espera 2 segundos antes de gerar uma nova palavra
  } else {
    mostrarModal("modal-erro");
    tentativaAtual = ""; // Limpa a tentativa atual após verificar
      atualizarTentativa(); // Atualiza a exibição da
      tentativasErradas++;
      if (tentativasErradas >= 3) {
        mostrarBotaoDica(); // Mostra o botão de dica após 3 tentativas erradas
      }
  }
}

function atualizarPontuacao() {
  document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;
  localStorage.setItem("anagramaPontos", pontuacao); // Salva a pontuação no localStorage
}

function carregarPontuacao() {
    const pontuacaoSalva = localStorage.getItem('anagramaPontos');
    if (pontuacaoSalva !== null && !isNaN(parseInt(pontuacaoSalva))) {
        pontuacao = parseInt(pontuacaoSalva);
    } else {
        pontuacao = 0;
        localStorage.setItem("anagramaPontos", pontuacao)
    }
    atualizarPontuacao();
}

function mostrarModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.style.display = "flex";
}

function fecharModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function mostrarDica() {
    document.getElementById("dica-palavra").innerText = palavraAleatoria;
    mostrarModal('modal-dica');
}

function mostrarBotaoDica() {
  const botaoDica = document.getElementById("btn-dica");
  if (botaoDica) {
    botaoDica.style.display = "block"; // Mostra o botão de dica
  }
}

function esconderBotaoDica() {
  const botaoDica = document.getElementById("btn-dica");
  if (botaoDica) {
    botaoDica.style.display = "none";
  }
}

function reiniciarJogo() {
  pontuacao = 0;
  palavrasAcertadas.clear();
  atualizarPontuacao();
  novaPalavra();
  fecharModal("modal-parabens");
}

novaPalavra();
carregarPontuacao();
criarTecladoVirtual();
