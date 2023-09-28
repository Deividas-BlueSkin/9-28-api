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
    fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json()).then(categories => {
        // optionArray = categories
        // console.log(optionArray)

        //do everything here

        let container = create('div', null, null, null, true)
        let select = create('select', container)
        categories.forEach(function (item) {
            let option = create('option', select)
            option.textContent = item
            option.value = item
        })
        let button = create('button', container)
        button.textContent = 'Get'
        button.value = 'get'
        let jokeContainer = create('div', container)
        button.addEventListener('click', function () {
            console.log(select.value)
            fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`).then(res => res.json()).then(joke => {
                create('p', jokeContainer, null, null, true).textContent = joke.value
            })
        })

        // let submit = create('input', form)
        // submit.type = 'submit'
        // submit.value = 'Get'
        // submit.addEventListener('click', function () {
        //     console.log(select.value)
        //     fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`).then(res => res.json()).then(joke => {
        //         create('p').textContent = joke.value
        //     })

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