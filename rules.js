const choice = ['rock', 'paper', 'scissors'];

// Rules
const rules = function (user, comp) {
    if (user === comp) {
        return 'draw';
    } else if ((user === 'rock' && comp === 'scissors') ||
        (user === 'paper' && comp === 'rock') ||
        (user === 'scissors' && comp === 'paper')) {
        return 'win';
    } else {
        return 'lose';
    }
};

// Generate Random Comp
const getRandomComp = function () {
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
};

// Scoreboard

const scoreboard = {
    user: 0,
    comp: 0
};

const updateScore = function (result) {
    if (result === 'win') {
        scoreboard.user++;
    } else if (result === 'lose') {
        scoreboard.comp++;
    }
};


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
