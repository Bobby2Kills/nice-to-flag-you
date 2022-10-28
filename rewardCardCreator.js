const rewardCardCreator = () => {
    const container = document.querySelector(".container")
    const card = document.querySelector("#card");
    const rewardImg = document.createElement("img");
    const resetButton = document.querySelector(".reset")
    resetButton.innerText = "Play Again!";
    rewardImg.src = `${imageSelector(score)}`;
    container.innerHTML = "";
    card.innerHTML = "";
    card.append(rewardImg);
    container.append(card)
}
