import '../css/resumeEntry.css'

export default class ResumeEntry{
    constructor(title, company, date, technologies, duties) {
        this.title = title
        this.company = company
        this.date = date
        this.technologies = technologies
        this.duties = duties
    }

    createTechnologies(){
        let tbl = document.createElement('table')
        let header = tbl.createTHead()
        let headerRow = header.insertRow()
        headerRow.classList.add('tech-table-header')
        let headerCell = headerRow.insertCell()
        headerCell.appendChild(document.createTextNode('Technologies'))

        let bodyRow = tbl.insertRow()
        let body = bodyRow.insertCell()

        if(this.technologies.length < 1){
            body.appendChild(document.createTextNode("N/A"))
        }else{
            body.appendChild(document.createTextNode(this.technologies.join(", ")))
        }

        tbl.classList.add('tech-table')

        return tbl
    }

    createDutiesList(){
        let ul = document.createElement('ul')

        this.duties.forEach((duty) => {
            let li = document.createElement('li')
            li.textContent = duty
            ul.appendChild(li)
        })

        return ul;
    }

    render(){
        let div = document.createElement('div')
        let titleNode = document.createElement('h4')
        titleNode.textContent = this.title

        let companyNode = document.createElement('h5')
        companyNode.textContent = this.company

        let dateNode = document.createElement('span')
        dateNode.textContent = this.date

        let technologiesTable = this.createTechnologies()
        let dutiesList = this.createDutiesList()

        div.appendChild(titleNode)
        div.appendChild(companyNode)
        div.appendChild(dateNode)
        div.appendChild(technologiesTable)
        div.appendChild(dutiesList)
        div.classList.add('resume-div')

        return div;
    }
}