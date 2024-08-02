let randmNumber = Math.floor(Math.random() * 100) + 1

function checkGuess() {
    const userGuess = document.getElementById("guess").value;
    const result = document.getElementById("result");

    if (userGuess == randomNumber) {
        localStorage.setItem("finalResult", "Congratulations! You guesssed the correct number!");
        window.location.href = "result.html";
    } else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
        result.style.color = "red";
    } else {
        result.textContent = "Too low! Try again.";
        result.style.color = "red";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("guess").value = '';
    document.getElementById("result").textContent = '';
}