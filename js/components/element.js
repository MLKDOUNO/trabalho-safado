export class Element{
    constructor(type){
        this.type = type
        this.element = document.createElement(this.type)
    }
    appendElement(element){
        this.element.appendChild(element.element)
    }
}