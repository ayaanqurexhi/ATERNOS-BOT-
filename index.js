const mineflayer = require('mineflayer');

// Bot configs
const bots = [
  { name: 'iron bhai' },
  { name: 'xpbhai' }
];

// Create and connect each bot
bots.forEach(cfg => {
  const bot = mineflayer.createBot({
    host: 'MINER__SMP.aternos.me',
    port: 36203,
    username: cfg.name,
    version: false
  });

  bot.on('spawn', () => {
    console.log(`${cfg.name} spawned and is online!`);
  });

  bot.on('end', () => {
    console.log(`${cfg.name} disconnected – reconnecting...`);
    setTimeout(() => mineflayer.createBot(bot.options), 5000);
  });

  bot.on('error', err => {
    console.error(`Error for ${cfg.name}:`, err);
  });
});
