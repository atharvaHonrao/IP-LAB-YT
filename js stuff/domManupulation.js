function s() {

    // const para = document.getElementById("para")
    // if(para.innerHTML=="Hi there"){
    //     para.innerHTML = "this is modified text"
    // }else{
    //     para.innerHTML = "Hi there"
    // }

    const newDiv = document.createElement("h1");
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    
    const currentDiv = document.getElementById("para");

    let getRequest = fetch("https://catfact.ninja/fact")

    getRequest.then((value) => value.json()).then((value) => {

        console.log(value)
        const newContent = document.createTextNode(value.fact);
        newDiv.appendChild(newContent);

    })
    // getRequest.catch(a => {
    //     console.log(a)
    // }
    // )

    document.body.insertBefore(newDiv, currentDiv);

} 