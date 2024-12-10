const choices = document.body.querySelectorAll(".choice");
const msg = document.body.querySelector("#msg");
const reset = document.body.querySelector(".reset-div");
let userScore = 0;
let compScore = 0;

choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`Choice of user ${userChoice}`);
        playGame(userChoice);
        reset.classList.remove("reset-div");
        reset.classList.add("reset");
    })
})

const playGame = (userChoice) => {
    console.log(`Choice of user: ${userChoice}`);

    const compChoice = getCompChoice();
    console.log(`Choice of computer: ${compChoice}`);

    if(userChoice === compChoice ){
        drawGame();
    }
    else {
        let userwin = false;
        if(userChoice  === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice  === "paper"){
            userwin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }  
        showWinner(userwin);   
    }
    
}

const getCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randOpt = Math.floor(Math.random() * 3);
    return options[randOpt];
}


const drawGame = () => {
    console.log(`Game was draw.`);
    msg.innerText = "Game was Draw!";

}

const showWinner = (userWin) => {
    if(userWin){
        console.log(`You win!!!`);
        msg.innerText = "You Win!";
    }else{
        console.log(`Computer win!!!`);
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}