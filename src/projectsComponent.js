import ProjectEntry from "./models/ProjectEntry.js";

export function projectComponent(div, data){
    let h2 = document.createElement('h2')
    h2.textContent = "Projects"
    div.appendChild(h2)
    createProjects(div, data)

    let button = document.createElement('button')
    button.textContent = "click"
    button.addEventListener('click', ()=>{
        window.component = "Experience"
    })
    div.appendChild(button)
}

function createProjects(mainDiv, data){
    data.projects.forEach((project) => {
        let temp = new ProjectEntry(project.name, project.description, project.technologies, project.gitHubLinks, project.hostLink)
        mainDiv.appendChild(temp.render())
    })
}