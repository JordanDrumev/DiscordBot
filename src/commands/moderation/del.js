module.exports.run = async(client, message, args) =>{
let {
    cache
} = message.guild.roles;

const roleSet = new Set(args);

roleSet.forEach((roleName) => {

    let role = cache.find(role => role.name.toLowerCase() === roleName);

    if (role) {

        if (message.member.roles.cache.has(role.id)) {
            message.member.roles.remove(role)
                .then(member => message.channel.send(`You've deleted ${role.name} from your roles`))
                .catch(err => {
                    console.log(err);
                    message.channel.send('There was a problem!')
                })
            return
        }

    } else {
        message.channel.send('Role not found')
    }
})
}