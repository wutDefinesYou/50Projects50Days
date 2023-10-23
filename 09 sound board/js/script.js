const buttons = document.querySelectorAll('button')
const audios = document.querySelectorAll('audio')

let lastAudio

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (lastAudio) {
      lastAudio.pause()
      lastAudio.currentTime = 0
    }

    lastAudio = audios[index]
    lastAudio.play()
  })
})
