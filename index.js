const Discord = require('discord.js');
const fs = require('fs');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

const TOKEN = config.botToken
const prefix = config.prefix

const PREFIX = '?';


//This is how to run a command for this bot

client.on('message', message=>{
let args = message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
case 'ping':
  message.reply('pong!');
break; 
}
})


client.emojis.cache.find(emoji => emoji.name === '<name of emoji>')



client.on('message', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.

if(message.content.toLowerCase() === 'hello')
    message.channel.send("Hello there you!" + "!");

else if(message.content.toLowerCase() === 'noot')
    message.channel.send("Who told you that name?? ");
  
  else if(message.content.toLowerCase() === 'wheres noot?')
    message.channel.send("shhhhhhh, noot is hiding!! ");
    
    else if(message.content.toLowerCase() === '23')
    message.channel.send("shut up, shut up, shut up, shut up, shut up ");
      
      else if(message.content.toLowerCase() === 'run')
    message.channel.send("the fitnessgram™ pacer test is a multistage aerobic capacity test that progressively gets more difficult as it continues. the 20 meter pacer test will begin in 30 seconds. line up at the start. the running speed starts slowly, but gets faster each minute after you hear this signal. [beep] a single lap should be completed each [forbbiden] you hear this sound. [ding] remember to run in a straight line, and run as long as possible. the second [forbbiden] you fail to complete a lap before the sound, your test is over. the test will begin on the word start. on your mark, get ready, start. ");
        
else if(message.content.toLowerCase() === 'time')
    message.channel.send("(flashbacks) Mr. Stark I don't feel good");

else if(message.content.toLowerCase() === 'your mom')
    message.channel.send("HA! gottem");

else if(message.content.toLowerCase() === 'gottem')
    message.channel.send("<:nootcringe:958593982848434236>");

else if(message.content.toLowerCase() === 'gottem')
    message.channel.send("<:nootcringe:958593982848434236>");

 else if(message.content.toLowerCase() === 'rick?')
    message.channel.send("I suggest this song is worth listening to :] https://www.youtube.com/watch?v=dQw4w9WgXcQ");

else if(message.content.toLowerCase() === 'this is bonkers')
    message.channel.send("indeed it is...");

else if(message.content.toLowerCase() === 'this is so sad')
    message.channel.send("literally cries ;-;");

  else if(message.content.toLowerCase() === 'dang')
    message.channel.send("this is so sad");

    else if(message.content.toLowerCase() === 'literally cries ;-;')
    message.channel.send("*reacts again*");

 else if(message.content.toLowerCase() === '*reacts again*')
    message.channel.send("wait i didnt mean to do this??");

  else if(message.content.toLowerCase() === 'wait i didnt mean to do this??')
    message.channel.send("no wait stop???");
    
  else if(message.content.toLowerCase() === 'no wait stop???')
    message.channel.send("i cant stop reacting?!??");

else if(message.content.toLowerCase() === 'i cant stop reacting?!??')
    message.channel.send("how do i stop?????");

  else if(message.content.toLowerCase() === 'how do i stop?????')
    message.channel.send("what is going on on?????");

   else if(message.content.toLowerCase() === 'what is going on on?????')
    message.channel.send("*crazy frog plays*");

    else if(message.content.toLowerCase() === 'when you at the')
    message.channel.send("when you at the e");

    else if(message.content.toLowerCase() === 'when you at the e')
    message.channel.send("when you");

    else if(message.content.toLowerCase() === 'when you')
    message.channel.send("you when the");

    else if(message.content.toLowerCase() === 'you when the')
    message.channel.send("**WHEN HE,**");

    else if(message.content.toUpperCase() === '**WHEN HE,**')
    message.channel.send("**WHEN HE AT THE.**");

   


   

//after this is scanning message responses

else if(message.content.toLowerCase().includes('elyott'))
 message.channel.send('hey I know her!?');
   
else if(message.content.toLowerCase().includes('noot'))
 message.channel.send('did someone say my name?');

else if(message.content.toLowerCase().includes('vio'))
 message.channel.send(':)');

else if(message.content.toLowerCase().includes('wtf'))
 message.channel.send('Do I hear a Vio swear??');

else if(message.content.toLowerCase().includes('cock'))
    message.channel.send("📸 (͠◉_◉᷅ ) ");

   
else if(message.content.toLowerCase().includes('clock'))       
{
    var date = new Date();
    message.channel.send('The time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());

}
// etc.... you get the idea. 
})

client.once('ready', () => {
    console.log("Noot is ready!! >:]")

});
client.login(TOKEN)