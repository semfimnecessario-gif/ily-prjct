// 1. CAPTURANDO OS ELEMENTOS
// Aqui dizemos ao JS para "segurar" os elementos do HTML que vamos usar
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const questionText = document.querySelector('.question');

// variável de cronômetro - retorna à posição original 
let resetTimer;

// 2. A MÁGICA DA FUGA (Lógica do botão "NÃO")
function moveButton() {
     // Mudamos o tipo de posição do botão para 'fixed' (preso na tela)
    btnNo.style.position = 'fixed';
    // Pegamos a largura e a altura da tela inteira do dispositivo
    const safeWidth = window.innerWidth - btnNo.offsetWidth;
    const safeHeight = window.innerHeight - btnNo.offsetHeight;

    // Sorteia uma posição X (horizontal) e Y (vertical) aleatória dentro da área segura.
    const randomX = Math.floor(Math.random() * safeWidth); 
    const randomY = Math.floor(Math.random() * safeHeight);

    // Movemos o botão
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';

    // 3. O RETORNO PARA CASA
    // Primeiro, cancelamos o cronômetro anterior (caso a pessoa fique tentando clicar várias vezes)
    clearTimeout(resetTimer);

    // Criamos um novo cronômetro de 2 segundos (2000 milissegundos)
    resetTimer = setTimeout(() => {
        // Ao limpar os estilos, o CSS volta a assumir o controle e o botão volta para o lado do "SIM"
        btnNo.style.position = '';
        btnNo.style.left = '';
        btnNo.style.top = '';
    }, 2000);
}

// 3. OUVINDO OS EVENTOS
// Se o mouse passar por cima do botão (em computadores), roda a função moveButton
btnNo.addEventListener('mouseover', moveButton);

// Se o dedo tocar no botão (em celulares), roda a função moveButton
btnNo.addEventListener('touchstart', moveButton);

// 4. O FINAL FELIZ (Lógica do botão "SIM")
btnYes.addEventListener('click', () => {
    // Quando clicar no SIM, mudamos o texto da pergunta
    questionText.innerHTML = "I knew it! ❤️";
    
    // E podemos esconder os botões para ficar apenas a mensagem final
    btnNo.style.display = 'none';
    btnYes.style.display = 'none';
});