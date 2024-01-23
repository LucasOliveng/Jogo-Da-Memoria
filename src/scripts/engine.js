// CONFIGURAÇÕES DE SONS DO JOGO
const volumeDoAudio = 0.4;
const volumeDaTrilha = 0.075;
////////////////////////////////

const emojis = [
    "😋",
    "😋",
    "😎",
    "😎",
    "😡",
    "😡",
    "🤡",
    "🤡",
    "💀",
    "💀",
    "👾",
    "👾",
    "👽",
    "👽",
    "👻",
    "👻",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 :-1));

for(let i=0; i<emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);

}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
        playSound('Hehe-Boy.mp3')
    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }

    openCards = [];

    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        setTimeout(function() {
            alert('Você venceu!');
        }, 3000);
        playSound('vitoria.m4a');
    }
}

function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = volumeDoAudio;
    audio.play();
}

function playTrilha(audioName) {
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = volumeDaTrilha;
    audio.play();
}

window.onload = function() {
    playTrilha('trilhaSonora.m4a');
}
