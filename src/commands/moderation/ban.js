module.exports.run = async(client, message, args) =>{
if (!message.member.hasPermission('BAN_MEMBERS')) {
    return message.reply('You don\'t have permission to ban members');
}
if (args.length === 0) return message.reply('Please provide an ID');
message.guild.members.ban(args[0]).then((banned) => {
        message.channel.send(`${banned} has been banned from this guild`)
    })
    .catch(err => console.log(err));
}