const boxes = document.querySelectorAll('.box')

slideBoxIn()

window.addEventListener('scroll', slideBoxIn)

function slideBoxIn() {
  for (let box of boxes) {
    if (box.getBoundingClientRect().top < window.innerHeight * 0.75)
      box.classList.add('show')
    else box.classList.remove('show')
  }
}
