const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit",(event)=> {
    event.preventDefault()
    const inputValue = event.target.children[1].value

    fetch(`http://localhost:3000/movies/${inputValue}`)
    .then(ftch => ftch.json())
    .then(data => {
        const title = document.querySelector('section#movieDetails h4')
        const summary = document.querySelector('section#movieDetails p')

        title.innerHTML = data.title
        summary.innerHTML = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);