
const flagCardCreator = () => {
    const card = document.querySelector("#card");
    let generatedNum = generateNumber();
    scoreNum = generatedNum;
    let flagNum = flagObject[generatedNum].number;
    let flagImage = document.createElement("img");
    const scoreCount = document.querySelector(".score2");
    const form = document.createElement("form");
    const container = document.querySelector(".container")
    scoreCount.innerText = `Correct Answers: ${score}/10`

    if(previousEntries.length >= 10){
        checkIfTrue()
        rewardCardCreator();
        return;
    }

    flagImage.src = `https://countryflagsapi.com/png/${flagNum}`
    flagImage.setAttribute("id","flagImage")
    form.innerHTML = "<input type ='text' class='answer' ' placeholder='Type country here!' id='userInput'/> <input type='submit' style='display: none'/><button>skip</button>";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submitFunction() ;
    })
    container.innerHTML = "";
    card.innerHTML = "";
    card.append(flagImage, form)
    container.append(card)
}

const resetFunction = () => {
    window.location.reload(true);
}
const checkIfTrue = () => {
    let input = document.querySelector("#userInput").value
    if(input === "czech republic"){
        input = "czechia";
    }
    let result = scoreIncrease(input);
    if(result){
        previousEntries.push({number:flagObject[scoreNum].number, isCorrect:true})
    }else{
        previousEntries.push({number:flagObject[scoreNum].number, isCorrect:false})
    }
    
}
const submitFunction = () => {
    checkIfTrue()
    previousEntriesCardCreator()
    flagCardCreator()
}

flagCardCreator()


