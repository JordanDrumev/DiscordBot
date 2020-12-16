module.exports.run = async(client, message, args) =>{
    
let {
    cache
} = message.guild.roles;

const roleSet = new Set(args);

roleSet.forEach((roleName) => {

    let role = cache.find(role => role.name.toLowerCase() === roleName);

    if (role) {

        if (message.member.roles.cache.has(role.id)) {
            message.channel.send('You already have this role!');
            return
        }
        if (role.permissions.has('ADMINISTRATOR') ||
            role.permissions.has('KICK_MEMBERS') ||
            role.permissions.has('BAN_MEMBERS') ||
            role.permissions.has('MANAGE_GUILD') ||
            role.permissions.has('MANAGE_CHANNELS')) {

            message.channel.send('You can not add yourself to this role.')

        } else {
            message.member.roles.add(role)
                .then(member => message.channel.send(`You've added ${role.name} to your roles`))
                .catch(err => {
                    console.log(err);
                    message.channel.send('There was a problem!')
                })
        }
    } else {
        message.channel.send('Role not found')
    }
})

}