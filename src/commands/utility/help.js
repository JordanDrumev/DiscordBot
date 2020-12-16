module.exports.run = async (client, message, args, PREFIX) => {

    if (args.length !== 0) {

        if (args[0] === 'add') {

            message.channel.send(`Using the "${PREFIX}add role" adds that role to you.
            The Roles are:
            -Main Tank
            -Main Healer
            -Range Spell DPS
            -Range DPS
            -Melee DPS
            -Main Ninja Looter
            -Muted - for when you want to mute yourself I guess ¯\\_(ツ)_/¯`);

        } else if (args[0] === 'ban') {

            message.channel.send(`"${PREFIX}ban ID" where the 'ID' is the ID of the user, is used to ban someone who has just gone a step too far!`);

        } else if (args[0] === 'del') {

            message.channel.send(`"${PREFIX}del role" where 'role' is one of your roles, will remove that role from your profile.`)

        } else if (args[0] === 'chillmusic') {

            message.channel.send(`
"${PREFIX}chillMusic" will return a random Youtube video with relaxing music. \n
You can use "${PREFIX}chillMusic count" to get the number of videos on the list. \n
You can use "${PREFIX}chillMusic list" to get the names of the videos. \n
Or you can use "${PREFIX}chillMusic and a number from 1 to as many videos are on the list" to get a sprecific video from the list`);

        } else if (args[0] === 'joke') {

            message.channel.send(`
"${PREFIX}joke" tell you a random joke. \n
Using "${PREFIX}joke count" you'll get how many jokes I knows. \n
If you use "${PREFIX}joke all" I will tell you all the jokes I knows. \n
You can also use a specific number to get a specific joke "${PREFIX}joke *number*."
`);

        } else if (args[0] === 'rolldice') {

            message.channel.send(`
You roll the dice and get a number between 1 and 100. \n
If you add a number "${PREFIX}rollDice *number*" you'll get a number between 1 and the number you put as an argument.`);

        } else if (args[0] === 'rps'){
            
            message.channel.send(`Type "${PREFIX}rps" + rock, paper or scissors and play against me. P.S I get's a little competitive.`);
    
        }
    }  else {

        message.channel.send(`
Moderation commands:
    ${PREFIX}add - add a role to yourself;
    ${PREFIX}ban - ban a user;
    ${PREFIX}del - delete a role you have
    ${PREFIX}embed - embed a message;
    ${PREFIX}kick - kick a user from the server;
    ${PREFIX}mute - mute a user;
    ${PREFIX}unmute - unmute a user;

Fun commands:
    ${PREFIX}chillMusic - get relaxing music;
    ${PREFIX}joke - let me tell you a joke;
    ${PREFIX}rollDice - get a random number between 1 and 100;
    ${PREFIX}rps - play a game of rock, paper, scissors with the me;

To get more specific help type ${PREFIX}help (command you need help with, without the prefix);
    Example: "${PREFIX}help joke"`);

    }
}