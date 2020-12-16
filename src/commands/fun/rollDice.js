module.exports.run = async (client, message, args) => {
    let n = 100;
    const roll = () => Math.floor((Math.random() * n) + 1);

    if (args.length === 1) {
        if (+args[0]) n = args[0];
    }

    message.reply(' rolled: ' + roll());
}