module.exports.run = async (client, message, args) => {
    const RPSChoices = ['rock', 'paper', 'scissors'];
    const BotChoice = RPSChoices[Math.floor(Math.random() * 3)];

    if (args.length !== 0) {
        if (args[0] !== 'rock' && args[0] !== 'paper' && args[0] !== 'scissors') {

            message.reply('I don\'t think you know how to play ROCK, PAPER, SCISSORS');
            return
        }

        message.reply(`I choose ${BotChoice}`)

        if (BotChoice === 'rock') {
            if (args[0] === 'rock') {
                message.reply('Ah well, great minds think alike. Don\'t you wish you were one :)');
            } else if (args[0] === 'scissors') {
                message.reply('Don\'t feel bad about it, few people are as good as me');
            } else if (args[0] === 'paper') {
                message.reply('Oh wow, nice luck , bro! Let\'s see you do it again.');
            }
        }

        if (BotChoice === 'paper') {
            if (args[0] === 'paper') {
                message.reply('Wow, very original.');
            } else if (args[0] === 'rock') {
                message.reply('Yeah I beat you, big surprise, so difficult.');
            } else if (args[0] === 'scissors') {
                message.reply('Oh yeah, I can win my cheating too. I just choose not to because I\'m a better person.');
            }
        }

        if (BotChoice === 'scissors') {
            if (args[0] === 'scissors') {
                message.reply('Great scissoring skills, bro.');
            } else if (args[0] === 'paper') {
                message.reply('Yeah, that\'s right. Who\'s number one? NOT YOU!');
            } else if (args[0] === 'rock') {
                message.reply('Best out of three....million.');
            }
        }

    } else {
        message.reply('You need to pick: Rock, Paper or Scissors before I start playing');
    }
}