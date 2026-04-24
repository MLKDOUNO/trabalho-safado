import { Element } from "./element.js";

export class Button extends Element{
    constructor(type){
        super(type)
        this.element.type = "button"
    }
}