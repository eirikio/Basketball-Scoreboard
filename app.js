let homeScore = document.getElementById("home-score-el");
let guestScore = document.getElementById("guest-score-el");

let scoreScreen = document.getElementsByClassName("score-screen");

let scoreBtn = document.getElementsByTagName("button");


let homeCounter = 0;
let guestCounter = 0;

scoreBtn[0].addEventListener("click", function(){
    result = homeCounter += 1;
    homeScore.innerHTML = result;
    highLightLeader();
})

scoreBtn[1].addEventListener("click", function(){
    result = homeCounter += 2;
    homeScore.innerHTML = result;
    highLightLeader();
})

scoreBtn[2].addEventListener("click", function(){
    result = homeCounter += 3;
    homeScore.innerHTML = result;
    highLightLeader();
})

scoreBtn[3].addEventListener("click", function(){
    result = guestCounter += 1;
    guestScore.innerHTML = result;
    highLightLeader();
})

scoreBtn[4].addEventListener("click", function(){
    result = guestCounter += 2;
    guestScore.innerHTML = result;
    highLightLeader();
})

scoreBtn[5].addEventListener("click", function(){
    result = guestCounter += 3;
    guestScore.innerHTML = result;
    highLightLeader();
})

//New game button
scoreBtn[6].addEventListener("click", function(){
    scoreScreen[0].style.outline = "";
    scoreScreen[1].style.outline = "";

    homeCounter = 0;
    homeScore.innerHTML = homeCounter;

    guestCounter = 0;
    guestScore.innerHTML = guestCounter;
    
})

function highLightLeader() {
    if (homeCounter > guestCounter) {
        scoreScreen[0].style.outline = "0.1px solid gold";
        scoreScreen[1].style.outline = "";
    } else if (homeCounter < guestCounter) {
        scoreScreen[0].style.outline = "";
        scoreScreen[1].style.outline = "0.1px solid gold";
    } else if (homeCounter == guestCounter) {
        scoreScreen[0].style.outline = "";
        scoreScreen[1].style.outline = "";
    }
}


