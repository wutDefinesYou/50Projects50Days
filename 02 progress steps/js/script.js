class Main {
  constructor() {
    this.progress_bar = document.querySelector('.progress')
    this.circles = document.querySelectorAll('.circle')
    const [prev, next] = document.querySelectorAll('.btn')
    this.prev_btn = prev
    this.next_btn = next
    this.currentPos = 0

    this.events()
  }

  events() {
    this.prev_btn.addEventListener('click', () => this.prevOnClick())
    this.next_btn.addEventListener('click', () => this.nextOnClick())
  }

  prevOnClick() {
    if (this.currentPos > 0) this.currentPos--

    this.update(this.currentPos)
  }

  nextOnClick() {
    if (this.currentPos < this.circles.length - 1) this.currentPos++

    this.update(this.currentPos)
  }

  update(currentPos) {
    this.progress_bar.style['inline-size'] =
      (currentPos / (this.circles.length - 1)) * 100 + '%'

    this.circles.forEach((circle, index) => {
      if (index <= this.currentPos) circle.classList.add('active')
      else circle.classList.remove('active')
    })

    if (this.currentPos === 0) this.prev_btn.disabled = true
    else if (this.currentPos === this.circles.length - 1)
      this.next_btn.disabled = true
    else {
      this.prev_btn.disabled = false
      this.next_btn.disabled = false
    }
  }
}

new Main()
