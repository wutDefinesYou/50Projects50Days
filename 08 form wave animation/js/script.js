const inputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')

for (let label of labels) {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) =>
        `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
    )
    .join('')
}

for (let [index, input] of inputs.entries()) {
  input.addEventListener('focus', () => moveLabelUp(index))
  input.addEventListener('blur', () => {
    if (!input.value) moveLabelDown(index)
  })
}

function moveLabelUp(index) {
  labels[index].classList.add('active')
}

function moveLabelDown(index) {
  labels[index].classList.remove('active')
}
