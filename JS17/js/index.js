let form = document.forms.formm
let input = document.querySelectorAll('.osn')
let nv = document.querySelectorAll('name_h1v')

form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(inpform)

    fm.forEach((value, key) => {
        user[key] = value
    })


    if(user.name && user.age && user.phone && user.surname && user.email && user.about && user.jss && user.htmll && user.csss){
        console.log(user);
    }else{
        input.forEach(e =>{
            e.style.border = '2px solid red'
        })
        nv.forEach(e =>{
            e.style.color = 'red'   
        })
    }
}
let patterns = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^9989[012345789][0-9]{7}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
}


function validation(regex, field) {
    if (regex.test(field.value)) {
        field.style.border = "2px solid blue"
    } else {
        field.style.border = "2px solid red"
    }
}

inputs.forEach(inp => {
    inp.onkeyup = () => {
        if (inp.name === "age") {
            if (inp.value >= 16 && inp.value <= 160) {
                inp.style.border = "2px solid blue"
            } else {
                inp.style.border = "2px solid red"
            }
        } else {
            validation(patterns[inp.name], inp)
        }
    }
})

// form.onsubmit = (e) => {
//     e.preventDefault();

//     // if(inputs === '' && inputs === false) {
//     //     console.log('alert');
//     // } else {
//     //     submit(e)
//     // }
// }



function submit(e) {
    let user = {}

    let fm = new FormData(e.target)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}