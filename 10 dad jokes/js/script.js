const jokeText = document.querySelector('p')
const button = document.querySelector('button')

generateJoke()
button.addEventListener('click', generateJoke)

async function generateJoke() {
  const headers = { Accept: 'application/json' }
  const response = await (
    await fetch('https://icanhazdadjoke.com', {
      headers: headers,
    })
  ).json()

  jokeText.innerHTML = response?.joke
}
