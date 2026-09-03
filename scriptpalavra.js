const blocosDeTexto = document.querySelectorAll('.automatizar-palavras:not(.especial)');

blocosDeTexto.forEach(bloco => {

    const nos = Array.from(bloco.childNodes);

    nos.forEach(no => {

        if (no.nodeType === Node.TEXT_NODE) {

            const partes = no.textContent.split(/(\s+)/);
            const fragmento = document.createDocumentFragment();

            partes.forEach(parte => {

                if (parte.trim() === '') {
                    fragmento.appendChild(document.createTextNode(parte));
                } else {
                    const span = document.createElement('span');
                    span.textContent = parte;
                    fragmento.appendChild(span);
                }

            });

            no.replaceWith(fragmento);
        }

    });

});

const somXXX = new Audio('Dialog_defaultTalk.ogg');
const somYYY = new Audio('sansUndertale.mp3');

somXXX.volume = 0.05;
somYYY.volume = 0.1;

document.querySelectorAll('.automatizar-palavras:not(.especial) span').forEach(palavra => {

    palavra.addEventListener('mouseenter', () => {
        somXXX.currentTime = 0;
        somXXX.play();
    });

});

document.querySelectorAll('.especial').forEach(elemento => {

    elemento.addEventListener('mouseenter', () => {
        somYYY.currentTime = 0;
        somYYY.play();
    });

});

function tentar() {
    const input = document.getElementById('exampleFormControlInput1');
    const valor = input.value.trim().toLowerCase();

    if (valor === 'amorzinho') {
        window.location.href = 'mensagem.html';
    } else {
        document.getElementById('falhas').innerHTML = 'Não é isso, tente novamente :3';
    }
}