import { Server } from "./server-settings";
import { Client } from "discord.js";

Server.start();
Server.keepalive();

const client = new Client();

client.on("ready", () => {
  console.log(`I'm ready! I'm ${client.user.username}!`);
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.channel.send("pong!");
  }

  if (message.content.match(client.user.username)) {
    message.channel.send("呼んだ？(o・ω・o)");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
