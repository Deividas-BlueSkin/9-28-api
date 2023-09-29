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

const container = create('div', null, null, null, true)

function formDogBreedImg() {
    fetch('https://dog.ceo/api/breeds/list/all'
    ).then(res => res.json()
    ).then(breeds => {

        const form = create('form', container, null, null, true)
        const select = create('select', form)


        Object.values(breeds.message).forEach(function (value, i) {

            if (value.length != 0) {
                value.forEach(function (item, j) {
                    const option = create('option', select)

                    option.textContent = Object.keys(breeds.message)[i] + '-' + item
                    option.value = Object.keys(breeds.message)[i] + '/' + item

                })
            } else {
                const option = create('option', select)

                option.textContent = Object.keys(breeds.message)[i]
                option.value = Object.keys(breeds.message)[i]
            }
        })

        const submit = create('input', form)
        submit.type = 'submit'
        submit.value = 'Get'
        let subContainer = create('div', container)

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log(select.value)
            fetch(`https://dog.ceo/api/breed/${select.value}/images/random`).then(res => res.json()).then(breed => {
                console.log(breed.message)
                let img = create('img', subContainer, null, null, true)
                img.src = breed.message
            })

        })
    })

}

formDogBreedImg() 