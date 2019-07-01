document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  let joke;

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = "haha")
  }




  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById('name-input').value
    if(username === "") return;

    fetchJoke()
    // .then(jokeData =>
    // )
    newJokeLi.innerHTML += `
    <span class="username">${username} says:</span> ${joke}
    <br> <br>`

    jokeList.appendChild(newJokeLi)

    form.reset();


  })
})
