let articleId = document.querySelector(".advice-id");
let articleText = document.querySelector(".advice-text");
let iconDice = document.querySelector(".main-div .icon-div");


function randomAdvice() {
    //console.log("clicked");
    fetch("https://api.adviceslip.com/advice").then(res => res.json()).then(result => {
        console.log(result)
        articleId.innerText = result.slip.id;
        articleText.innerText = result.slip.advice;
    });
};

iconDice.addEventListener("click", randomAdvice);