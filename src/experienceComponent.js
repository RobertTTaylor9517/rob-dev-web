import ResumeEntry from "./models/ResumeEntry";

export function experienceComponent(div, data){
    let h2 = document.createElement('h2')
    h2.textContent = "Experience"
    div.appendChild(h2)

    createResume(div, data)
}

function createResume(mainDiv, data){
    data.experience.forEach((item) => {
        let temp = new ResumeEntry(item.title, item.company, item.date, item.technologies, item.duties)
        mainDiv.appendChild(temp.render())
    })
}