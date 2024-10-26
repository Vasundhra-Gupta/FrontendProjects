let userScore=0;
let compScore=0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara= document.querySelector("#user") ;
const compScorePara= document.querySelector("#comp");

//Generating Random Choice by computer
const genRandChoice=()=>{
    let option= ["rock", "paper", "scissor"];
    randIndx= Math.floor(Math.random()*3);
    return option[randIndx];
}
//Winner Deciding
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `You lose! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
//Game
const playgame=(userChoice)=>{
    console.log("User choice is", userChoice);//getting userChoice
    const compChoice= genRandChoice();
    console.log("Comp Choice is",compChoice);//getting compChoice
    //game logic
    if(userChoice==compChoice){
        console.log("Draw");
        msg.innerText= `Game was draw! Both got ${compChoice}. Play again`;
        msg.style.backgroundColor="#081b31";
        
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //paper, scissor
            userWin= compChoice=="scissor"?true: false;
        }
        else if(userChoice=="paper"){
            //scissor, rock
            userWin= compChoice=="scissor"?false: true;
        }
        else{
            //rock, paper
            userWin= compChoice=="paper"?true: false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}
//taking user choice
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        userChoice= choice.getAttribute("id");
        // console.log(userChoice);
        playgame(userChoice);
    })
});

