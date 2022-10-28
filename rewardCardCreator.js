const rewardCardCreator = () => {
    const body = document.querySelector("body");
    body.innerHTML = "";

    const rewardImg = document.createElement("img");
    const resetButton = document.createElement("button")
    resetButton.innerText = "Play Again!";
    resetButton.addEventListener("click",()=>{
        window.location.reload(true);
    })
    rewardImg.src = `${imageSelector(score)}`;

    body.append(rewardImg,resetButton);
}
