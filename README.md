# Jogo do Anagrama

Bem-vindo ao Jogo do Anagrama! Este é um jogo educativo e divertido onde o jogador deve descobrir palavras embaralhadas usando um teclado virtual. O objetivo é acertar todas as palavras únicas da lista para completar o jogo e receber uma mensagem de parabéns.

## Descrição

O Jogo do Anagrama apresenta uma lista de palavras em português que são embaralhadas e exibidas ao jogador. O jogador usa um teclado virtual para formar a palavra correta e verificar se acertou. A pontuação aumenta a cada acerto, e o jogo oferece uma dica após três tentativas erradas na mesma palavra. Quando todas as palavras únicas são acertadas, uma modal de parabéns é exibida, permitindo reiniciar o jogo.

## Funcionalidades

- **Teclado Virtual**: Permite ao jogador digitar palavras usando botões interativos.
- **Embaralhamento de Palavras**: Cada palavra é embaralhada aleatoriamente para criar o desafio.
- **Pontuação**: A pontuação aumenta com cada palavra acertada e é salva no `localStorage`.
- **Dica**: Disponível após três tentativas erradas na mesma palavra.
- **Modal de Erro**: Exibida quando a tentativa está incorreta.
- **Modal de Dica**: Mostra a palavra correta quando o botão de dica é clicado.
- **Modal de Parabéns**: Aparece ao completar todas as palavras únicas, com opção de reiniciar.
- **Design Responsivo**: Ajusta-se a diferentes tamanhos de tela, incluindo celulares.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização e layout responsivo, incluindo animações e transições.
- **JavaScript**: Lógica do jogo, manipulação do DOM e armazenamento local.
- **localStorage**: Para salvar a pontuação entre sessões.

## Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, etc.).
- Nenhum servidor ou dependência externa é necessária; o jogo roda localmente.

## Instalação

1. Clone o repositório ou baixe os arquivos diretamente:
   ```bash
   git clone https://github.com/seu-usuario/jogo-do-anagrama.git
