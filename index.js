const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'm ready! I'm tunabot!");
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong!");
  }

  if (message.content.includes(client.user.username)) {
    message.channel.send("呼んだ？(o・ω・o)");
  }
});

client.on("presenceUpdate", (oldMember, newMember) => {
  console.log("old presence: ", oldMember.presence.status);
  console.log("new presence: ", newMember.presence.status);

  if (oldMember.presence.status !== newMember.presence.status) {
    if (newMember.presence.status === "online") {
      console.log(JSON.stringify(client.channels.array));
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
