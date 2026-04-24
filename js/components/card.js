import { Element } from "./element.js"

export class Card extends Element{
    constructor(){
        super("card")
        this.add()
    }

    add = () => {
        this.element.classList.add(this.id)
    }
    
}