const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDM4NzM3MzgwMzcxOTg4NDgx.DcI9-A.AdsWQ8UyjJjd-61Y_uYxtSenH6g";
var prefix = ".";
var mention = "@Atlantys.R"
var version = "0.1";

client.on("ready", () => {
var servers = client.guilds.array().map(g => g.game).join('\n');
console.log('Je suis pret ! ')


var memberNumber = client.users.size;                           
var serverNumber = client.guilds.size;
setInterval(function(){
client.user.setGame(".help | I am Green^^")}, 200000);
setTimeout(function(){
setInterval(function(){
client.user.setGame(""+memberNumber+" members | "+serverNumber+" guilds")}, 200000)}, 100000)

client.user.setStatus("online")

})

//HELP COMMAND//
client.on('message', (message) => {

if(message.content === prefix + "help") {
 var help_embed = new Discord.RichEmbed()
  .setColor('#00FF2B')
  .setAuthor('Help Menu')
  .addField('Usefull','``.avatar <@user>`` ``.profile <@user>`` ``.afk <reason>`` ``.remafk``')
  .addField('Bot infos','``.invite`` ``.infos`` ``.ping`` ``.bug <bug>``')
  .addField('Fun','``.koala <text>`` ``.love <@user>`` ``.flip``')
  .addField('Picture','``.triggered``')
  
  .addField('Mod & Admin','``.ban <@user>`` ``.kick <@user>`` ``.purge <nomber>``')
message.channel.send(help_embed)
}
});
//COMMANDES UTILES//
client.on('message', (message) => {

if (message.content.startsWith(prefix + "avatar")) {
        if (!message.mentions.users.first()) return message.channel.send(":x: | Please indicate the user")
   let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
  let ava = user.displayAvatarURL
  let embed = {
      
      description:""+user.username+"'s avatar: *[url]("+ava+")*",
      image:{url:ava}
    }
  message.channel.send("", {embed})
}


});
//
client.on('message', (message) => {
if(message.content.startsWith(prefix + "profile")) {

let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));
    if(!User) return message.channel.send(":x: | Please specify a user");
    
   

    let uinfoEmbed = new Discord.RichEmbed()
    .setAuthor(`${User.user.username}`)
    .setColor('00FF2B')
    .addField("#tag", `${User.user.discriminator}`)
    .addField("ID", `${User.user.id}`)
    .addField("Created at", `${User.user.createdAt}`)
    .addField("Last message", `${User.user.lastMessage}`)
    .addField(" Bot ?", `${User.user.bot}`)
     .setThumbnail(User.user.displayAvatarURL);

    


    message.channel.send(uinfoEmbed);

 }
});


client.on('message', (message) => {
var msg = message;


let afk = JSON.parse(fs.readFileSync("./afks.json", "utf8"));

if (message.content.startsWith(prefix + "remafk")){

if (afk[msg.author.id]) {

delete afk[msg.author.id];

if (msg.member.nickname === null) {

msg.channel.send(":white_check_mark: | I removed your afk successfully");

}else{

msg.channel.send(":white_check_mark: | I removed your afk successfully");

}

fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { 
if (err) console.error(err);});

}else{

msg.channel.send(":x: | Error , You are already afk");

}

}


if (message.content.startsWith(prefix + "afk")||message.content === prefix + "afk") {

if (afk[message.author.id]) {

return message.channel.send(":x: | Error , You are already afk");

}else{

let args1 = message.content.split(" ").slice(1);

if (args1.length === 0) {

afk[message.author.id] = {"reason" : true};

message.delete();

message.channel.send(`:white_check_mark: You are now afk, say **${prefix}remafk** to remove it`).then(x => DeleteQueue.add(x, 10000));

}else{

afk[message.author.id] = {"reason" : args1.join(" ")};

message.delete();

message.channel.send(`:white_check_mark: You are now afk, say **${prefix}remafk** to remove it`).then(x => DeleteQueue.add(x, 10000));

}

fs.writeFile("./afks.json", JSON.stringify(afk), (err) => { 
if (err) console.error(err);});

}

}

    

    var mentionned = message.mentions.users.first();

if(message.mentions.users.size > 0) {

if (afk[message.mentions.users.first().id]) {

if (afk[message.mentions.users.first().id].reason === true) {

message.channel.send(`**${mentionned.username}** is afk : no reason`);

}else{

message.channel.send(`**${mentionned.username}** is afk: ${afk[message.mentions.users.first().id].reason}`);

}

}

}
});

//BOT INFOS//

client.on('message', message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + 'ping')) {
    
let startTime = Date.now();

message.channel.send("Pong = loading...").then(msg => msg.edit(`Pong :ping_pong: != ${Date.now() - startTime} ms`));


}

}); 
client.on('message', (message) => {

if(message.content === prefix + "invite") {
	var invite_embed = new Discord.RichEmbed()
	 .setColor('00FF2B')
	 .addField('Hey !You want invite me ? ','[Click here !](https://discordapp.com/oauth2/authorize?client_id=438737380371988481&scope=bot&permissions=536214775)')
	 message.channel.send(invite_embed)
	 }
});
	client.on('message', (message) => {
	if(message.content.startsWith(".bug")) {

        let args = message.content.split(' ').slice(1).join(" ")
        
        
        if (!args) return message.channel.send(":x: | You must report the bug");
        message.channel.send(":white_check_mark: |  Thanks !")
      
        
        
        
        var support_embed = new Discord.RichEmbed()
           .setColor('00FF2B')
           .setTitle("| BUG |")
           .addField("Message by " + message.author.username + "#" + message.author.discriminator + ": ", args)
.setAuthor(message.guild.name)
           .setThumbnail(message.author.disAvatarURL)
        
        client.channels.get("438749972293222411")
        .send(support_embed)
client.channels.get("438749972293222411")
        .send(message.author.username + "#" + message.author.discriminator)
    }
});
client.on('message', (message) => {
 client.on("guildCreate", guild => {
 var channel = client.channels.get("438770868978712586")
message.channel.send(':white_check_mark: | Je suis maintenant sur le serveur **'+guild.name+'** dont le owner est **'+guild.owner.user.tag+'** qui compte **'+guild.memberCount+' membres**')
});
});

client.on('message', (message) => {

if(message.content === prefix + "infos") {
 var infos_embed = new Discord.RichEmbed()
  .setColor('00FF2B')
  .setTimestamp()
  .setAuthor('Bot infos')
  .addField('Name',+client.user.username+'#'+client.user.discriminator+'')
  .addField('ID',+client.user.id+'')
  .addField('Created at',+client.user.createdAt+'')
  .addField('Version',''+version+'')
  .addField('Prefix',''+prefix+'')
  .addField('Invite link','Say ``.invite``')
  .addField('Uptime',(Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes" + (Math.round(client.uptime / 1000) % 60) + " seconds")
  .addField('Langage','English')
  .addField('Langage of developper','Français')
  .addField('Code langage','Js')
message.channel.send(infos_embed)
}
});
//FUN COMMANDS//
client.on('message', (message) => {

if (message.content.startsWith(prefix + 'koala')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send(":x: | You must say a message");
    message.channel.send('User : '+message.author.username+ '\n```<'+(args)+' >\n  (”)...(”) \n  ( ‘ o ‘ ) \n   (”)–(”) \n (””’)-(””’)```')
  }        
});

client.on('message', message => {
if (message.content.startsWith(prefix + "love")) {  
 var mention = message.mentions.users.first(2) 
   if(!mention)
   message.channel.send(":x: | Please specify a user");
 

var love = Math.floor(Math.random() * 101);
  var love_embed = new Discord.RichEmbed()
   .setColor('#FF00DC')
   
   .setDescription(':heart: | **'+mention+'** + **'+message.author.username+'** = **'+love+'%**')
message.channel.send(love_embed)
  }
    
 client.on('message', message => {
if (message.content === prefix + "flip") {
    	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    	 
    	 message.channel.send("I choose **Stick**")
    	} else if (result == 2) {
    		
    	  
    	  
    	 message.channel.send("I choose **Head**")
    	}
    }

});  
});
//const fs = require("fs"); 
//let points = JSON.parse(fs.readFileSync("./points.json", "utf8")); 
//client.on("message", message => { 
//if (message.author.bot) return; // always ignore bots! // if the points don"t exist, init to 0; 
//if (!points[message.author.id]) points[message.author.id] = { points: 0,level: 0 }; 
//let userData = points[message.author.id]; userData.points++;
 
//let curLevel = Math.floor(0.1 * Math.sqrt(userData.points + 1)); 
//let nxtLvlXp = curLevel * 300;

//  let difference = nxtLvlXp - userData.points;



 //if (curLevel > userData.level) { // Level up! userData.level = curLevel; 
//message.reply(`:up: | You are now level**${curLevel}**! `); } 
//if (message.content.startsWith(prefix + "level")) { 
// var level_embed = new Discord.RichEmbed()
//  .setColor('#81FF00')
// .setTitle(''+message.author.username+'')                            
//  .setDescription("**Level**\n" +userData.level+ " \n**Points**\n"+userData.points+ " xp \n**Xp til level up**\n"+difference+"")
 // .setTimestamp()
//message.channel.send(level_embed)
// }
//message.reply(`Vous êtes level ${userData.level}, avec ${userData.points} points.`); }
//points[message.author.id].points++; // And then, we save the edited file.
 //fs.writeFile("./points.json", JSON.stringify(points), (err) => { if (err) console.error(err) }); 
const fs = require("fs");
client.on("message", message => { 
let xp = require("./points.json");



  if(!xp[message.author.id]){

   xp[message.author.id] = {

     xp: 0,

     level: 1

  };

}

  let curxp = xp[message.author.id].xp;

  let curlvl = xp[message.author.id].level;

  let nxtLvlXp = curlvl * 300;

  let difference = nxtLvlXp - curxp;

if (message.content.startsWith(prefix + "level")) { 
  let lvlEmbed = new Discord.RichEmbed()

  .setAuthor(message.author.username)

  .setColor('#81FF00')

  .addField("Level", curlvl, true)

  .addField("XP", curxp, true)

  .setFooter(`${difference} XP til level up`, message.author.displayAvatarURL);


  message.channel.send(lvlEmbed).then(msg => {msg.delete(5000)});

}


});
//PICTURES//
client.on('message', (message) => {

if(message.content.startsWith(prefix + "triggered")) { 
var image; 
var args = message.content.split(" ").slice(1).join(" "); 
if(args){ 
var image = args; 
}else{ 
var image = message.author.avatarURL; 
} 
message.channel.send({ file: { attachment: "http://www.triggered-api.tk/api/v1/url=" + image, name: "triggered.gif" 
}}) 
}
});








//ADMINISTRATIONS COMMANDS//
client.on('message', (message) => {

if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" "); 
switch (args[0].toLowerCase()) {

        case "kick":
            if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
                message.channel.send(":x: | You must have kick members permission")
            } else {
                var member = message.mentions.members.first();
                if (!member) {
                    message.channel.send(":x: | Please mention a user");
                } else {
                    if (!member.kickable) {
                        message.channel.send(":x: | Error , I can't kick this user");
                    } else {
                        member.kick().then((member))
 
 var kick_embed = new Discord.RichEmbed()
 .setColor('00FF2B')
 .setDescription(':white_check_mark: | '+member+' has been kicked')
                        message.channel.send(kick_embed);


                    }
                }

            }
        
    }
    });
  client.on('message', (message) => { 
  
 if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" "); 
switch (args[0].toLowerCase()) {
        case "ban":
            if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")) {
                message.channel.send(":x: | You must have ban members permission")
            } else {
                var member = message.mentions.members.first();
                if (!member) {
                    message.channel.send(":x: | Please mention a user");
                } else {
                    if (!member.bannable) {
                        message.channel.send(":x: | Error, I can't ban this user");
                    } else {
                        member.ban().then((member))
 
 var ban_embed = new Discord.RichEmbed()
 .setColor('00FF2B')
 .setDescription(':white_check_mark: |  '+member+' has been banned')
                        message.channel.send(ban_embed);


                    }
                }

            }
        
    } 
});
client.on('message', (message) => {

if (message.content.startsWith(prefix + "purge")) {
if (message.channel.type === "dm") return;
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply(":x: | You have'nt the permission").catch(console.error);

const user = message.mentions.users.first();
 const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]) 
if (!amount) return message.reply(':x: | Please enter a limit'); 
if (!amount && !user) 
return message.reply(':x: | Please enter a limit');
if (!user){
if(isNaN(message.content.split(' ')[1]) || parseInt(message.content.split(' ')[1]) < 2 || parseInt(message.content.split(' ')[1]) > 100){
message.channel.send(':x: |')
}
}
if(message.content.split(' ')[2]){
if(isNaN(message.content.split(' ')[2]) || parseInt(message.content.split(' ')[2]) < 2 || parseInt(message.content.split(' ')[2]) > 100){
message.channel.send(':x: | Please specify a limit beetween 2 and 100')
}
}
 message.channel.fetchMessages({ limit: amount, }).then((messages) => {
 if (user) {
const filterBy = user ? user.id : Client.user.id;
messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));


    
});
}
});
//OWNER//



client.on('message', (message) => {
if(message.content.startsWith(mention)){
message.channel.send(':white_check_mark: | **Hi !**')
}

});
client.login(token)



