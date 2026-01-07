const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function play(playerChoice) {
    if (playerWins === 3 || computerWins === 3) return;

    const options = Object.keys(emojis);
    const computerChoice = options[Math.floor(Math.random() * 3)];

    document.getElementById("hands").innerText =
        `You: ${emojis[playerChoice]} | Computer: ${emojis[computerChoice]}`;

    if (playerChoice === computerChoice) {
        ties++;
        updateStatus("It's a tie 😐");
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerWins++;
        updateStatus("You win this round 🎉");
    } else {
        computerWins++;
        updateStatus("You lose this round 😢");
    }

    updateScore();

    if (playerWins === 3) {
        updateStatus("🏆 YOU WON THE MATCH!");
    } else if (computerWins === 3) {
        updateStatus("💀 COMPUTER WON THE MATCH!");
    }
}

function updateScore() {
    document.getElementById("score").innerText =
        `You: ${playerWins} | Computer: ${computerWins} | Ties: ${ties}`;
}

function updateStatus(text) {
    document.getElementById("status").innerText = text;
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;

    updateStatus("First to 3 wins!");
    updateScore();

    document.getElementById("hands").innerText =
        "You: ❓ | Computer: ❓";
}