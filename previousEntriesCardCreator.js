const previousEntriesCardCreator = () =>{
    const sidebar = document.querySelector("#previousEntriesBar")
    sidebar.innerHTML = "";
    for(let entry of previousEntries){
        let entryImage = document.createElement("img");
        entryImage.src = `https://countryflagsapi.com/png/${entry}`
        sidebar.append(entryImage)
    }
}


