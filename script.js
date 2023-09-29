function create(HTMLelement, parent, classes, id, first) {
    let element = document.createElement(HTMLelement)
    if (parent) {
        if (first) parent.prepend(element)
        else parent.append(element)
    }
    else {
        parent = document.body
        if (first) parent.prepend(element)
        else parent.append(element)
    }
    if (classes) {
        element.className = classes
    }
    if (id) {
        element.id = id
    }
    return element
}


// fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()).then(data => {
//     console.log(data.value)
// })


// const button = document.querySelector('#random-joke-button')
// let button = create('button')
// button.textContent = 'button'

/* <form>
<select name="" id="">
  <option>Animals</option>
  <option>Career</option>
  <option>Celebrity</option>
</select>

<input type="submit" value="Get a joke by category">
</form> */


// let optionArray = []
init()
function init() {

    let container = create('div', null, null, null, true)
    let form = create('form', container, null, null, true)
    let select = create('select', form)

    let submit = create('input', form)
    submit.type = 'submit'
    submit.value = 'Get'
    let jokeContainer = create('div', container)
    let fetched = false

    submit.addEventListener('click', function (event) {
        event.preventDefault();
        if (fetched) {
            fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`).then(res => res.json()).then(joke => {
                create('p', jokeContainer, null, null, true).textContent = joke.value
            })
        }
    })

    fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json()).then(categories => {

        categories.forEach(function (item) {
            let option = create('option', select)
            option.textContent = item
            option.value = item
        })
        fetched = true
    })

    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<
    // search
    // [<=-=-=-=-=-=-=-=-=-=-=-=>][<=-=-=-=-=-=-=-=-=-=-=-=>][<

    // let searchLabel = create('label',form)
    // searchLabel.textContent = ' Search: '
    // let search = create('input', form)
    // search.type = 'search'
    // // submit.value = 'Get'
    // search.addEventListener('search', function (event) {
    //     event.preventDefault();
    //     console.log(search.value)
    //     fetch(`https://api.chucknorris.io/jokes/search?query=${search.value}`).then(res => res.json()).then(joke => {
    //         let index = Math.floor(Math.random() * joke.count)
    //         console.log(joke.length)
    //         console.log(index)
    //         // create('p', jokeContainer, null, null, true).textContent = joke[index].value
    //     })
    // })
}


function getJokeByPhrase() {
    const searchForm = create('form')
  
    searchForm.addEventListener('submit', event => {
      event.preventDefault()
  
      const searchPhrase = event.target['search-input'].value
      const searchUrl = `https://api.chucknorris.io/jokes/search?query=${searchPhrase}`
  
      fetch(searchUrl)
        .then(res => res.json())
        .then(data => {
          const total = data.total
          const jokeParagraph = document.querySelector('#joke-paragraph')
  
          if (total > 0) {
            const index = Math.floor(Math.random() * total)
            const selectedJoke = data.result[index].value
  
            jokeParagraph.textContent = selectedJoke
          } else {
            jokeParagraph.textContent = 'No joke found :('
          }
        })
    })
  }

// function doAll(options) {


// button.addEventListener('click', (res) => {
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(res => res.json())
//         .then(joke => {
//             create('p').textContent = joke.value
//         })
// })
// }

// fetch('https://api.chucknorris.io/jokes/categories')
//     .then(res => res.json())
//     .then(categories => {
//         console.log(categories)
//     })

// let category = 'career'

// fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
//     .then(res => res.json())
//     .then(joke => {
//         console.log(joke)
//     })