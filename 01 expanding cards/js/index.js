class Layout {
  constructor() {
    this.items = [
      {
        title: 'Explore The World',
        image:
          'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80}',
      },
      {
        title: 'Wild Forest',
        image:
          'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
      {
        title: 'Sunny Beach',
        image:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      },
      {
        title: 'City on Winter',
        image:
          'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      },
      {
        title: 'Mountains - Clouds',
        image:
          'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
    ]

    this.events()
  }

  events() {
    this.viewInit()
    this.flexContainer.children[0].classList.add('clicked')
    this.selected = document.querySelector('.clicked')
    this.flexContainer.addEventListener('click', ($event) =>
      this.onClick($event)
    )
  }

  viewInit() {
    this.flexContainer = document.querySelector('.flex')
    let template = ''
    this.items.forEach(({ title, image }) => {
      template += `
                <div
                class="item"
                style="background-image: url(${image})">
                    <h2>${title}</h2>
                </div>    
                `
    })

    this.flexContainer.innerHTML = template
  }

  onClick($event) {
    let ele

    if ($event.target.classList.contains('item')) {
      ele = $event.target
    } else if ($event.target.tagName === 'H2') {
      ele = $event.target.parentElement
    }

    this.selected.classList.remove('clicked')
    ele.classList.add('clicked')
    this.selected = ele
  }
}

new Layout()
