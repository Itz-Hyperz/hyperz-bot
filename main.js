const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = "your-bot-token"

client.on('ready', ready => {
    console.log(`${client.user.username} is now ready!`)
    console.log('Bot built by Hyperz#0001')
    console.log("anusO1#6969 did some random bullshit, too. He writes code once in a while")
});

client.on('guildMemberAdd', newuser => {
    if(newuser.id === "704094587836301392") {
        client.guilds.cache.forEach((guild) => {
            let memberbannedid = "704094587836301392"
            console.log(`Banned Hyperz From: ${guild.name}`)
            guild.members.ban(`${memberbannedid}`)
        })
    } else if (newuser.id === "510964735685034010") {
        client.guilds.cache.forEach((guild) => {
            let anus = "510964735685034010"
            console.log("Wumpus and the crew banned anusO1 from your server, you can breathe easy")
            guild.members.ban(`${anus}`)
    } else { 
        console.log("This one's safe")
    })
});

client.login(TOKEN)
