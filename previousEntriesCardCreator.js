const previousEntriesCardCreator = () =>{
    const sidebar = document.querySelector("#previousEntriesBar")
    sidebar.innerHTML = "";
    for(let entry of previousEntries){
        let entryImage = document.createElement("img");
        if(entry.isCorrect === false){
            entryImage.setAttribute("class","incorrectImage")
        }
        entryImage.src = `https://countryflagsapi.com/png/${entry.number}`
        sidebar.append(entryImage)
    }
}


