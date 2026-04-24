import { Element } from "./element.js";
import { Button } from "./button.js";

export class Form extends Element{
    constructor(method, action){
        super("form")
        this.element.method = method
        this.element.action = action
    }
    addButton(text){
        const button = new Button("submit")
        const content = document.createTextNode(text)
        button.element.appendChild(content)
        this.appendElement(button)
    }
}