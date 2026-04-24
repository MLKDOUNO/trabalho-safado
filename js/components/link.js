import { Element } from "./element.js";

export class Link extends Element{
    constructor(link, target, text){
        super("a")
        this.setLink(link)
        this.setTarget(target)
        this.setText(text)
    }
    setLink(link){
        this.element.href = link
    }
    setTarget(target){
        this.element.target= target
    }
    setText(text){
        this.element.textContent = text
    }
}