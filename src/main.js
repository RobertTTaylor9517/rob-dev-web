import './css/main.css'

export function generateMain(){
    let div = document.createElement('div')

    div.classList.add('top-div')
    document.body.appendChild(div)
}