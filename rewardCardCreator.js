const rewardCardCreator = () => {
    const body = document.querySelector("body");
    body.innerHTML = "";

    const rewardImg = document.createElement("img");
    rewardImg.src = `${imageSelector(score)}`;

    body.append(rewardImg);
}
