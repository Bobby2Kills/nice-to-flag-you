const rewardCardCreator = () => {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const rewardImg = document.createElement("img");
    const resetButton = document.createElement("button")
    resetButton.innerText = "Play Again!";
    resetButton.addEventListener("click",()=>{
        window.location.reload(true);
    })
    rewardImg.src = `${imageSelector(score)}`;

    main.append(rewardImg,resetButton);
}
