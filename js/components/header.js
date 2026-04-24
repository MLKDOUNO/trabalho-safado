export function DesenharHeader(){
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        const header = document.querySelector("#cab_")

        const heade = document.createElement("div")
        heade.classList.add("heade")

        const text = document.createElement("h1")
        text.textContent = "ola"

        heade.appendChild(text)
        header.appendChild(heade)
            
        

    })
}
DesenharHeader()