const chillMusic = [{
        name: 'Oblivion - Music & Ambience - Towns [10 Hours]',
        link: 'https://www.youtube.com/watch?v=HntrakyHmKg&t'
    },
    {
        name: 'Skyrim - Music & Ambience',
        link: 'https://www.youtube.com/watch?v=nRe3xFeyhVY'
    },
    {
        name: 'World of Warcraft - Music & Ambience - Eversong Woods',
        link: 'https://www.youtube.com/watch?v=FU_yNE2MMOU'
    }
];

module.exports.run = async (client, message, args) => {

    if (args.length === 0) {

        message.reply(chillMusic[Math.floor(Math.random() * chillMusic.length)].link);

    } else {
        if (args[0] === 'count') {

            message.reply(`There are currently ${chillMusic.length} chill music videos`)

        } else if (args[0] === 'list') {

            chillMusic.forEach(m => {
                message.reply(m.name)
            });

        } else if (+args[0]) {

            message.reply(chillMusic[+args[0] - 1].link)

        }
    }


}