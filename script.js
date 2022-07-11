// computer play that is randomly generated each time called
function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}

// the game start
function game() {
    let playerWin = 0;
    let computerWin = 0;
    let gameWinner = "";

    //  Add event listeners for all three buttons/run round on click/track and end game
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = "Player Win totals: " + playerWin;
            computerWinText.textContent = "Computer Win totals: " + computerWin;
    
            gameText.textContent = "You selected: " + playerSelection + ". " + "Computer selected: " + computerSelection;
            endGame();
        })
    })

        // play the round and determine winner
        function playRound(playerSelection, computerSelection) {
            let tie = "It's a Tie! Both selected " + playerSelection + ".";
            let paperBeatRock = "You Win!";
            let scissorsBeatPaperLoss = "You lose!";
            let paperBeatRockLoss = "You lose!";
            let rockBeatScissors = "You Win!";
            let rockBeatScissorsLoss = "You lose!";
            let scissorsBeatPaper = "You Win!";

            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
                playerWin++;
                return paperBeatRock;
            } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
                computerWin++;
                return scissorsBeatPaperLoss;
            } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
                computerWin++;
                return paperBeatRockLoss;
            } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
                playerWin++;
                return rockBeatScissors;
            } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
                computerWin++;
                return rockBeatScissorsLoss;
            } else {
                playerWin++;
                return scissorsBeatPaper;
            }
        }
    
    //  create div DOM for all results
    const container = document.querySelector("#container");
    const resultsDiv = document.createElement("div");
    resultsDiv.style.marginTop = "30px";
    container.appendChild(resultsDiv);

    //  create player win tracking DOM 
    const playerWinText = document.createElement("p");
    playerWinText.style.color = "blue";
    playerWinText.style.fontWeight = "bold";
    playerWinText.textContent = "Player Win totals: " + playerWin;
    resultsDiv.appendChild(playerWinText);

    //  create computer win tracking DOM
    const computerWinText = document.createElement("p");
    computerWinText.style.color = "red";
    computerWinText.style.fontWeight = "bold";
    computerWinText.textContent = "Computer Win totals: " + computerWin;
    resultsDiv.appendChild(computerWinText);


    

    // TEST
    const gameText = document.createElement("p");
    resultsDiv.appendChild(gameText);

    const playerText = document.createElement("p");
    const computerText = document.createElement("p");




    //  create battle win text DOM
    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    resultsDiv.appendChild(battleWinText);
    
    //  create game win text DOM
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "green";
    gameWinText.style.fontWeight = "bold";
    gameWinText.style.fontSize = "x-large";
    gameWinText.style.textDecoration = "underline";
    gameWinText.textContent = gameWinner;
    resultsDiv.appendChild(gameWinText);

    //  determine who won to five points first
    function endGame() {
        if (playerWin == 5) {
            gameWinner = "YOU WON!";
            gameWinText.textContent = gameWinner;
            
            //  disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            //  create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again!";
            playAgainButton.style.fontSize = "15px";
            playAgainButton.style.width = "100px";
            playAgainButton.style.padding = "10px 10px";
            playAgainButton.style.backgroundColor = "moccasin";
            playAgainButton.style.borderRadius = "10px";
            resultsDiv.appendChild(playAgainButton);
            
            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        } else if (computerWin == 5) {
            gameWinner = "THE COMPUTER WON!";
            gameWinText.textContent = gameWinner;
            
            //  disable game buttons
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            //  create new DOM button to replay
            const playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again?";
            resultsDiv.appendChild(playAgainButton);
            
            //  if clicked, reload page
            playAgainButton.addEventListener('click', () => {
                location.reload();
                })
        }   
    }
}

//  function call to start the game
game();