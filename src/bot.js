require('dotenv').config();

const fs = require('fs').promises;
const path = require('path');
const {
    Client
} = require('discord.js');
const client = new Client();
const PREFIX = process.env.PREFIX;


client.login(process.env.DISCORDJS_BOT_TOKEN);
client.commands = new Map();
client.limits = new Map();
client.on('ready', () => {
    console.log(`${client.user.username} has logged in.`)
});

client.on('message', async function (message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const [cmdName, ...arguments] = message.content.match(/(^\$[\w]+)|([\w\s])+/g);
    const args = [];
    const CMD_NAME = cmdName.substring(1);

    arguments.forEach((e, i) => {
        args[i] = e.trim().toLowerCase();
    });

    if (client.commands.get(CMD_NAME)) {
        client.commands.get(CMD_NAME).run(client, message, args, PREFIX);
    } else {
        console.log('No such command!');
    }
});


(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));

    for (let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if (stat.isDirectory()) {
            registerCommands(path.join(dir, file));
        } else {
            if (file.endsWith('.js')) {
                let cmdName = file.substring(0, file.indexOf('.js'));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
            }
        }
    }

})();