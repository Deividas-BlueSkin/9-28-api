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

function formName() {

    const form = create('form', container, null, null, true)

    const text = create('input', form)
    text.type = 'text'
    text.value = 'Ferry'

    const submit = create('input', form)
    submit.type = 'submit'
    submit.value = 'Get'
    let subContainer = create('div', container)

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        fetch(`https://api.agify.io?name=${text.value}`).then(res => res.json()).then(data1 => {
            // console.log(data)  
            fetch(`https://api.nationalize.io?name=${text.value}`).then(res => res.json()).then(data2 => {
                // console.log(data)
                fetch(`https://api.genderize.io?name=${text.value}`).then(res => res.json()).then(data3 => {
                    // console.log(data)
                    let div = create('div', subContainer, null, null, true)
                    div.textContent = `Age: ${data1.age}, Nation: ${data2.country[0].country_id}, Gender: ${data3.gender}`
                })
            })
        })

    })


}

formName() 