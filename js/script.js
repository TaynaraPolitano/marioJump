const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Detecção de colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        console.log('COLIDIU!');

        // Parar a animação do tubo
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Parar o Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Trocar a imagem do Mario
        mario.src = './images/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Parar o loop
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
