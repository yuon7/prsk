import { Client, GatewayIntentBits } from 'discord.js';
import { updateJsonFile} from './features/infoCollection/infoCollection'; // 適切なパスに変更してください
import {parseRegisterCommand} from './commands/register'
import { config } from 'dotenv';
config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', (message) => {
  console.log(`Received message: ${message.content}`);  
  const parsedData = parseRegisterCommand(message.content);
  if (parsedData) {
    const userId = message.author.id;
    const formationId = 'formation1'; 
    updateJsonFile(userId, formationId, parsedData);
    message.reply('Information registered successfully.');
  }
});

const token = process.env.DISCORD_BOT_TOKEN;
client.login(token);
