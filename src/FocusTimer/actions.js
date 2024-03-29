import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    sounds.buttonPressAudio.play()
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}


export function set() {
    console.log('Setting')
    el.minutes.setAttribute('contenteditable', true)

    console.log(`state.minutes = ${state.minutes}`)
    sounds.buttonPressAudio.play()
    el.minutes.focus()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    
    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}
