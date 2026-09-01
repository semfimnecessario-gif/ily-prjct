// 1. CAPTURANDO OS ELEMENTOS
// Aqui dizemos ao JS para "segurar" os elementos do HTML que vamos usar
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const questionText = document.querySelector('.question');

// 2. A MÁGICA DA FUGA (Lógica do botão "NÃO")
function moveButton() {
    // Pegamos a largura e a altura da tela inteira do dispositivo
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculamos uma posição X (horizontal) e Y (vertical) aleatória.
    // Subtraímos 100 pixels para garantir que o botão não fuja para fora da tela
    const randomX = Math.floor(Math.random() * (windowWidth - 100)); 
    const randomY = Math.floor(Math.random() * (windowHeight - 100));

    // Mudamos o tipo de posição do botão para 'absolute' (livre pela tela)
    btnNo.style.position = 'absolute';
    // Aplicamos as novas coordenadas geradas
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
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