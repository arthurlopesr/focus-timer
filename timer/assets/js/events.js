import {
    buttonPlay,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    buttonSet,
    buttonPause,
} from "./elements.js"

export default function Events(
    controls,
    timer,
    sound,

) {
    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countdown()
        sound.pressButton();
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', function () {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOn.classList.remove('hide')
        buttonSoundOff.classList.add('hide')
        sound.bgAudio.pause()
    })

    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.play()
    })

    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
    })

    return {
        buttonPlay,
        buttonPause,
        buttonStop,
        buttonSoundOff,
        buttonSoundOn,
        buttonSet,
    }
} 