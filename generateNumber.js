let previousEntries = [];

const generateNumber = () =>{
    let randomNum = Math.floor(Math.random()*77);
    console.log(randomNum)
    for(let entry of previousEntries){
        if(entry.number == flagObject[randomNum].number){
            return generateNumber();
        }
    }
    return randomNum;
}