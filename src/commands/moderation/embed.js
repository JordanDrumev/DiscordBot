const { MessageEmbed } = require('discord.js');

module.exports.run = async(client, message, args) =>{
let embedContent = message.content.substring(7);
            let embed = new MessageEmbed();
            embed.setDescription(embedContent);
            embed.setColor("#46457");
            embed.setAuthor(message.author.tag, message.author.displayAvatarURL());
            message.channel.send(embed);
}