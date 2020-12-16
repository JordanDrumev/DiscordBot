const jokes = [
    "I don't drink anymore... 'course, I don't drink any less either!",
    "Oh, I'm just a social drinker. Every time someone says, 'I'll have a drink', I say, 'So shall I'!",
    "It's like my father always used to say: 'Shut up, and get out.' ",
    "Some day, I hope to find the nuggets on a chicken.",
    "I don't have a drinkin' problem! I drink, I get drunk, I fall down. No problem!",
    "I invented a new word: Plagiarism!",
    "It is said: To err is human...*laughs* Stupid humans.",
    "It is said: everywhere is in walking distance, if you have the time.",
    "It is said: If you cannot beat them, join them. I say, if you cannot beat them, beat them. Because they will be expecting you to join them, so you will have the element of surprise.",
    "Why do people care what type of sheep I dream about?!?"
];

module.exports.run = async (client, message, args) => {
    const l = jokes.length;

    if (args.length === 0) {

        message.reply(jokes[Math.floor(Math.random() * l)]);

    } else {
        if (args[0] === 'count') {

            message.reply(`I know ${l} jokes`);

        } else if (args[0] === 'all') {

            jokes.forEach(j => {
                message.reply(j + '\n')
            })

        } else if (+args[0]) {

            message.reply(jokes[args[0] - 1]);

        } else {
            message.reply('The "$joke" argument are :\n count - for the number of jokes; \n all - for all the jokes; \n or a number from 1 to the maximum number of jokes to get a specific joke;')
        }
    }
}