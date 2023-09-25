const background = document.querySelector('div')
const text = document.querySelector('p')

const START = 0
const END = 100
let load = START

let loadTimerId = setTimeout(function increment() {
  if (load >= END) clearTimeout(loadTimerId)
  else {
    loading()
    loadTimerId = setTimeout(increment, 50)
  }
}, 50)

function loading() {
  load++
  background.style.filter = `blur(${rangeMapping(load, 30, 0)}px)`
  text.innerText = `${load}%`
  text.style.opacity = `${rangeMapping(load, 0.35, 1)}`
}

function rangeMapping(
  currentValue,
  targetStart,
  targetEnd,
  start = START,
  end = END
) {
  return (
    ((targetEnd - targetStart) / (end - start)) * currentValue + targetStart
  )
}
