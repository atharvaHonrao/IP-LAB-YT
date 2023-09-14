function s() {

    const newDiv = document.createElement("h1");
    const newContent = document.createTextNode("Hi there and greetings!");    
    const currentDiv = document.getElementById("para");
    currentDiv.style.color = "red"

    let getRequest = fetch("https://catfact.ninja/fact")

    getRequest.then((value) => value.json()).then((value) => {

        console.log(value)
        const newContent = document.createTextNode(value.fact);
        newDiv.appendChild(newContent);

    })

    document.body.insertBefore(newDiv, currentDiv);

} 