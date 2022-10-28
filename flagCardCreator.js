
const flagCardCreator = () => {

    const card = document.querySelector("#card");
    if(previousEntries.length >= 10){
        rewardCardCreator();
        return;
    }
    let generatedNum = generateNumber();
    scoreNum = generatedNum;
    let flagNum = flagObject[generatedNum].number;
    let flagImage = document.createElement("img");
    const scoreCount = document.querySelector(".score2");
    const form = document.createElement("form");
    scoreCount.innerText = `Correct Answers: ${score}/10`
    flagImage.src = `https://countryflagsapi.com/png/${flagNum}`
    form.innerHTML = "<input type ='text' ' placeholder='Type country here!' id='userInput'/> <input type='submit' style='display: none'/><button>skip</button>";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submitFunction() ;
    })
    card.innerHTML = "";
    form.append(flagImage)
    card.append(form)
    
}

const resetFunction = () => {
    window.location.reload(true);
}

const submitFunction = () => {
    let input = document.querySelector("#userInput").value
    if(input === "czech republic"){
        input = "czechia";
    }
    scoreIncrease(input)
    previousEntries.push(flagObject[scoreNum].number)
    flagCardCreator()
    previousEntriesCardCreator()
}

flagCardCreator()


