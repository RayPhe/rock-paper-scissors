const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    //start the game

    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
   };
   //Play match

   const playMatch = () => {
       const options = document.querySelector(".options button")
   };

   //calls all inner functions

   startGame();
};
   //start the game function

   game();