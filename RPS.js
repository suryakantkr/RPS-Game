let userscore = 0;
let compscore = 0;
const choises = document.querySelectorAll(".choise");
const msg = document.querySelector(".Play");
const userparagraph=document.querySelector(".user-paragraph");
const compparagraph=document.querySelector(".comp-paragraph");

const genCompChoise = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
        msg.innerText = "Game Was Draw. Play Again";
        msg.style.backgroundColor="blue";
};

const showWin = (userWin,userChoise,compChoise) => {
    if (userWin) {
        userscore++;
        userparagraph.innerText=userscore;
        msg.innerText = `You Win! Your ${userChoise} Beats ${compChoise}`;
       msg.style.backgroundColor="green";
    } else {
        compscore++;
        compparagraph.innerText=compscore;
       msg.innerText=`You Lose.${compChoise} Beats Your ${userChoise}`;
        msg.style.backgroundColor="red";
    }

}

const Play = (userChoise) => {
    console.log("user Choise =", userChoise);
    const compChoise = genCompChoise();
    console.log("Comp Choise =", compChoise)
    if (userChoise === compChoise) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoise === "Rock") {
            userWin = compChoise === "Paper" ? false : true;
        } else
            if (userWin === "Paper") {
                userWin = compChoise === "Scissors" ? false : true;
            } else {
                userWin = compChoise === "Rock" ? false : true;
            }
        showWin(userWin,userChoise,compChoise);
    }
}
choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id");
        Play(userChoise);
    });
});

// msg.addEventListener("click", ()=>{
//     msg.innerText = "Ho Gaya";
    
//     alert("let's learn")
// } )
