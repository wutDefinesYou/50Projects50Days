const section = document.querySelector('section')

window.addEventListener('keyup', (event) => {
  section.innerHTML = `
    <div>
      ${event.key === ' ' ? 'Space' : event.key}
      <span>Key</span>
    </div>

    <div>
      ${event.keyCode}
      <span>Key Code</span>
    </div>

    <div>
      ${event.code}
      <span>Code</span>
    </div>
  `
})
