import './css/background.css'
let count = 0;

export function generateBackground(){
    let mainDiv = document.createElement('div')
    mainDiv.id = 'mainBack'
    mainDiv.classList.add('main-div')

    document.body.appendChild(mainDiv)

    createCircle()
    setInterval(() => {
        if(count <= 25){
            createCircle()
        }
    }, 100)

}

function createCircle(){
    count++
    let ranLeft = getRandomInt(0, 100)
    let ranSize = getRandomInt(20, 100)
    let ranTime = getRandomInt(4, 7)
    let text = `<circle fill='black' cx=${ranSize/2} cy=${ranSize/2} r=${ranSize/2}>`
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    circle.setAttribute("height", String(ranSize))
    circle.setAttribute("width", String(ranSize))

    circle.innerHTML = text
    circle.classList.add('Back_circle')
    circle.addEventListener('animationend', (e) => {
        count--
        e.target.remove()
    })
    circle.style.setProperty('--which-left', ranLeft + '%')
    circle.style.setProperty('--time-interval', ranTime + 's')
    let main = document.getElementById('mainBack')

    main.appendChild(circle)
}

function getRandomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min) + min)
}