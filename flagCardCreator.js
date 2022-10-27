
const flagCardCreator = () => {
    const body = document.querySelector("body");
    let generatedNum = generateNumber();
    scoreNum = generatedNum;
    let flagNum = flagObject[generatedNum].number;
    let flagImage = document.createElement("img");
    const scoreCount = document.createElement("p");
    const form = document.createElement("form");
    scoreCount.innerText = `Correct Answers: ${score}/10`
    flagImage.src = `https://countryflagsapi.com/png/${flagNum}`
    form.innerHTML = "<input type ='text' ' placeholder='Type country here!' id='userInput'/> <input type='submit' style='display: none'/><button>skip</button>";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submitFunction() ;
    })
    body.innerHTML = "";
    form.append(flagImage,scoreCount)
    body.append(form)
    
}

const submitFunction = () => {
    let input = document.querySelector("#userInput").value
    previousEntries.push(flagObject[scoreNum].number)
    scoreIncrease(input)
    flagCardCreator()
}

flagCardCreator()


