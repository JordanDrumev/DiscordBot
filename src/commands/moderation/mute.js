module.exports.run = async(client, message, args) =>{
    if (!message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])) {
        message.channel.send('You do\'t have permission to use that command.');
    } else {
        let memberID = args[0];
        let member = message.guild.members.cache.get(memberID);

        if (member) {
            if (member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS']) && !member.hasPermission(['ADMINISTRATOR'])){
                message.channel.send('You can not mute that person.')
            } else {
                let muteRole = message.guild.roles.cache.get('786196522554621972');

                if(muteRole){

                member.roles.add(muteRole);
                message.channel.send(`${message.guild.members.cache.get(args[0])} was muted`);

                } else {
                    message.channel.send('Mute role not found.');
                }
            }
        } else {
            message.channel.send('Member not found.')
        }
    }
}