import { Element } from "./element.js";

export class Img extends Element{
    constructor(img){
        super("img")
        this.setSrc(img)
    }

    setSrc(img){
        this.element.src = img
    }

    getSrc(){
        return this.element.src
    }
}