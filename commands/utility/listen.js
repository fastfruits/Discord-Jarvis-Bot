const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 2,
    data: new SlashCommandBuilder()
     .setName('listen')
     .setDescription('Joins call user is in and starts listening to conversation waiting for wake up call.'),
    
     async execute(interaction) {
        await interaction.reply('Joining and Listening!');
    },
};