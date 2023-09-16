const container = document.querySelector('.container')
const [close, open] = document.querySelectorAll('button')
const nav = document.querySelector('nav')

open.addEventListener('click', () =>
  [container, nav].forEach((ele) => ele.classList.add('container-rotated'))
)
close.addEventListener('click', () =>
  [container, nav].forEach((ele) => ele.classList.remove('container-rotated'))
)
