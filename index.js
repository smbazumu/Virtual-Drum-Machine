function playSound(event) {
    let keyCode;

    if (event.keyCode) {
        keyCode = event.keyCode;
    } else {
        keyCode = this.getAttribute('data-key');
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keyCode}"]`)

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

function removePlaying(event) {
    event.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removePlaying)
    key.addEventListener('keydown', playSound)
    key.addEventListener('touchstart', playSound, {
        passive: true
    })
})

document.addEventListener('keydown', playSound)