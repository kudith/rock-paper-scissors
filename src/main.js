// main.js
import { rules, getRandomComp, scoreboard, updateScore } from './rules';

// Event listener for buttons
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.getAttribute('data-choice');
        const compChoice = getRandomComp();
        const result = rules(userChoice, compChoice);

        // Display the result
        const resultDiv = document.getElementById('result');
        const finalResult = document.getElementById('final-result');
        // get icon for user and comp
        const userIcon = document.getElementById('user-choice');
        const compIcon = document.getElementById('comp-choice');
        // Display the icon
        userIcon.innerHTML = `<img width="100" src="/img/${userChoice}.gif" alt="${userChoice}">`;
        compIcon.innerHTML = `<img width="100" src="/img/${compChoice}.gif" alt="${compChoice}">`;
        resultDiv.innerHTML = `You choose: ${userChoice} <br> Computer choose: ${compChoice}`;
        finalResult.innerHTML = `${result}!`;

        // Update the score
        updateScore(result);
        const userScore = document.getElementById('user-score');
        const compScore = document.getElementById('comp-score');
        userScore.innerHTML = scoreboard.user;
        compScore.innerHTML = scoreboard.comp;
    });
});
