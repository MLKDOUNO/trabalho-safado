import { Element } from "./element.js";

export class Text extends Element{
    constructor(type, text){
        super(type)
        this.element.textContent = text
    }
}