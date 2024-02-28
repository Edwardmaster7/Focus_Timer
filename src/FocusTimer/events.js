import * as state from "./state.js"
import * as el from "./elements.js"
import * as actions from "./actions.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        // console.log(event.target.dataset.action)
        const action = event.target.dataset.action

        if(typeof actions[action] != 'function') {
            return 
        }
        // console.log(action)
        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ""
    })

    //check if the minutes textContent contains letter
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent 
        console.log(time)
        time = time > 99 ? 60 : time
        console.log(time)
        console.log(state.minutes)

        updateDisplay(time, 0)

        el.minutes.removeAttribute('contenteditable')
   
    })
}