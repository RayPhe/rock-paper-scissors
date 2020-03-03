const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // play match

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hand.addEventListener("animationend", function(){
                this.style.animation="";
            });
        });
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        // computer choice

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
            
            setTimeout(()=>{

            // This is where we compare the hands
             compareHands(this.textContent, computerChoice);
            // Update images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);

            //animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            });
        });

    };

    //update score
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    };
        // comparing hands

    const compareHands = (playerChoice, computerChoice) =>{

        // checking for a draw

        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It's a draw";
            return;
        }
        // checking for rock

        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Human Wins!"
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Machine Wins!"
                cScore++;
                updateScore();
                return;
            }
        }

        // checking for paper

        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Machine Wins!"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Human Wins!"
                pScore++;
                updateScore();
                return;
            }
        }

        //check for scissors

        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Machine Wins!"
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Human Wins!"
                pScore++;
                updateScore();
                return;
            }
        }
    }


    startGame();
    playMatch();
};
game();