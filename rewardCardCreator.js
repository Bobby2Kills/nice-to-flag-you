const rewardCardCreator = () => {
    const card = document.querySelector("#card");
    card.innerHTML = "";
    const rewardImg = document.createElement("img");
    const resetButton = document.querySelector(".reset")
    resetButton.innerText = "Play Again!";
    rewardImg.src = `${imageSelector(score)}`;

    card.append(rewardImg);
}
