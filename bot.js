const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['412547940654252053'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Mpl')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(` <: :white_check_mark:  **${argresult} \** `)
} else 
if (message.content.startsWith('Mst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(` <: :white_check_mark:  **${argresult} \** `)
} else
if (message.content.startsWith('Mls')) {
   client.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(` <: :white_check_mark:  **${argresult} \** `)
} else
if (message.content.startsWith('Mwt')) {
   client.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(` <: :white_check_mark:  **${argresult} \** `)
}
});

client.login(process.env.B);
