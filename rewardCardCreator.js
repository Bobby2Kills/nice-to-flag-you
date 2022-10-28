const rewardCardCreator = () => {
    const card = document.querySelector("#card");
    card.innerHTML = "";
    const rewardImg = document.createElement("img");
    const resetButton = document.createElement("button")
    resetButton.innerText = "Play Again!";
    resetButton.addEventListener("click",()=>{
        window.location.reload(true);
    })
    rewardImg.src = `${imageSelector(score)}`;

    card.append(rewardImg,resetButton);
}
