let scoreNum = 0;
let score = 0

const scoreIncrease = (answer) => {
    if (answer.toLowerCase() === flagObject[scoreNum].name){
        score = score+1
        return true;
    }
    else{
        return false;
    }
}