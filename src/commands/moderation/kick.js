module.exports.run = async(client, message, args) =>{
if (!message.member.hasPermission('KICK_MEMBERS')) {
    return message.reply('You don\'t have permission to kick members');
}
if (args.length === 0) {
    return message.reply('Please enter ID.');
}
const member = message.guild.members.cache.get(args[0]);

if (member) {
    member
        .kick()
        .then((member) => {
            message.channel.send(`${member} was kicked.`)
        })
        .catch((member) => {
            message.channel.send(`${member} was not abled to be kicked.`)
        })
} else {
    message.channel.send('This member was not found.');
}
}