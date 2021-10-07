import '../css/projectEntry.css'

export default class ProjectEntry{
    constructor(name, description, technologies, gitHubLinks, hostLink){
        this.name = name
        this.description = description
        this.gitHubLinks = gitHubLinks
        this.technologies = technologies
        this.hostLink = hostLink
    }

    getTechnologies(div){
        this.technologies.forEach((technology) => {

        })
    }



    render(){
        let div = document.createElement('div')
        let h4 = document.createElement('h4')
        h4.textContent = this.name

        let p = document.createElement('p')
        p.textContent = this.description

        let frontLink = document.createElement('a')
        frontLink.href = this.gitHubLinks['frontend']
        frontLink.textContent = "Frontend"
        frontLink.classList.add('link')

        let backLink = document.createElement('a')
        backLink.href = this.gitHubLinks['backend']
        backLink.textContent = "Backend"
        backLink.classList.add('link')


        div.appendChild(h4)
        div.appendChild(p)
        div.appendChild(frontLink)
        div.appendChild(backLink)
        div.classList.add('project-div')

        return div;


    }
}