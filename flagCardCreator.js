 /*const fetchFlag = async() => {
    try{
    let randomNum = Math.floor(Math.random()*10);
    let flagNum = flagObject[randomNum].number;
    const response = await fetch(`https://countryflagsapi.com/png/${flagNum}.json`);
    const data = await response.json();
    return data;
    }catch{
        throw Error("Didn't work fool")
    }
} */


const flagCardCreator = () => {
    const body = document.querySelector("body");
    let generatedNum = generateNumber();
    scoreNum = generatedNum;
    let flagNum = flagObject[generatedNum].number;
    previousEntries.push(flagNum)
    //const text = document.createElement("h3");
    let flagImage = document.createElement("img");
    const scoreCount = document.createElement("p");
    const form = document.createElement("form");
    scoreCount.innerText = `Correct Answers: ${score}/10`
    flagImage.src = `https://countryflagsapi.com/png/${flagNum}`
    //text.textContent = flagObject[generatedNum].name;
    form.innerHTML = "<input type ='text' ' placeholder='Type country here!' id='userInput'/> <input type='submit' style='display: none' />";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        submitFunction() ;
    })
    body.innerHTML = "";
    form.append(flagImage,/*text,*/ scoreCount)
    body.append(form)
}

const submitFunction = () => {
    let input = document.querySelector("#userInput").value
    console.log(input)
    scoreIncrease(input)
    flagCardCreator()
}

flagCardCreator()