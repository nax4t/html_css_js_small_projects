'strict mode'

let body = document.querySelector('body')
let dark = document.querySelector('#dark')

dark.onclick = function() {
    // if(dark.checked == true) {
    //     body.classList.add('darkMode')
    // } else {
    //     body.classList.remove('darkMode')
    // }

    // Alternative to above code.
    (dark.checked) ? body.classList.add('darkMode') : body.classList.remove('darkMode')

}