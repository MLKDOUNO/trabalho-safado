import { Card } from "./components/card.js";
import { Img } from "./components/img.js";
import { Text } from "./components/text.js";
import { Button } from "./components/button.js";
import { Link } from "./components/link.js";
import { DesenharHeader } from "./components/header.js";
import { Form } from "./components/form.js";


export function CardBasicos(){
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        const container = document.querySelector("#basico")
        data.basicos.map(carr=>{
            const card = new Card()
            
            const img = new Img(carr.img)

            const nome = new Text("h2", carr.nome)

            const desc = new Text("h1", carr.descricao)

            const form = new Form("GET", carr.link)
            form.addButton("comprar")

            card.appendElement(img)
            card.appendElement(nome)
            card.appendElement(desc)
            card.appendElement(form)

            container.appendChild(card.element)
        })
    })
}

export function CardIntermediarios(){
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        const container = document.querySelector("#intermediarios")
        data.Intermediarios.map(carr=>{
            const card = new Card()
            
            const img = new Img(carr.img)

            const nome = new Text("h2", carr.nome)

            const desc = new Text("h1", carr.descricao)
            
            const form = new Form("GET", carr.link)
            form.addButton("comprar")

            card.appendElement(img)
            card.appendElement(nome)
            card.appendElement(desc)
            card.appendElement(form)

            container.appendChild(card.element)
        })
    })
}
export function CardPremium(){
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        const container = document.querySelector("#premium")
        data.premium.map(carr=>{
            const card = new Card()
            
            const img = new Img(carr.img)

            const nome = new Text("h2", carr.nome)

            const desc = new Text("h1", carr.descricao)
            
            const form = new Form("GET", carr.link)
            form.addButton("comprar")

            card.appendElement(img)
            card.appendElement(nome)
            card.appendElement(desc)
            card.appendElement(form)

            container.appendChild(card.element)
        })
    })
}
CardBasicos()
CardIntermediarios()
CardPremium()