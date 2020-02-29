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

        const computerOptions = ["rock", "paper", "scissors"];

        // computer choice

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
            
            // Update images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
            });
        });

    };
        // comparing hands

    const compareHands = (playerChoice, computerChoice) =>{

        // checking for a draw

        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            wimmer.textContent = "It's a draw";
            return;
        }
        // checking for rock

        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Human Wins!"
                return;
            }else{
                winner.textContent = "Machine Wins!"
                return;
            }
        }

        // checking for paper

        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Machine Wins!"
                return;
            }else{
                winner.textContent = "Human Wins!"
                return;
            }
        }

        //check for scissors

        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Machine Wins!"
                return;
            }else{
                winner.textContent = "Human Wins!"
                return;
            }
        }
    }


    startGame();
    playMatch();
};
game();