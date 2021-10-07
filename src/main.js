import './css/main.css'
import {projectComponent} from "./projectsComponent";
import {experienceComponent} from "./experienceComponent";
let data = require('../src/data.json')
let component = 'Projects'
window.component = 'Projects'

export function generateMain(){
    let div = document.createElement('div')

    div.classList.add('top-div-desktop')
    setComponent(div)
    setInterval(()=>{
        // console.log('check')
        checkComponent(div)
    }, 10)
    // console.log(data)
}

function clearDiv(div){
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
}

function setComponent(div){
    switch(component){
        case 'Projects':
            projectComponent(div, data)
            document.body.appendChild(div)
            break;
        case 'Experience':
            experienceComponent(div,data)
            document.body.appendChild(div)
            break;
        default:
            console.log("default")
    }
}

function checkComponent(div){
    // console.log("hit check")
    if(component != window.component){
        clearDiv(div)
        component = window.component
        setComponent(div)
    }
}