// rules.js
const choice = ['rock', 'paper', 'scissors'];

// Rules
export const rules = function (user, comp) {
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
export const getRandomComp = function () {
    const randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
};

// Scoreboard
export const scoreboard = {
    user: 0,
    comp: 0
};

export const updateScore = function (result) {
    if (result === 'win') {
        scoreboard.user++;
    } else if (result === 'lose') {
        scoreboard.comp++;
    }
};
