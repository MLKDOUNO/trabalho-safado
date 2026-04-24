import { Element } from "./element.js";

export class Button extends Element{
    constructor(type){
        super("button")
        this.element.type = type
    }
}