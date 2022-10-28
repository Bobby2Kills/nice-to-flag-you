const previousEntriesCardCreator = () =>{
    const body = document.querySelector("body")
    const sidebar = document.querySelector("#previousEntriesBar")
    sidebar.innerHTML = "";
    for(let entry of previousEntries){
        let entryImage = document.createElement("img");
        entryImage.src = `https://countryflagsapi.com/png/${entry}`
        sidebar.append(entryImage)
    }
    body.append(sidebar)
}


